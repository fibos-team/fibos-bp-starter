/*
 * 开启 producer/history/emitter
 * @Author: PaddingMe (BP:liuqiangdong)
 * @Date: 2018-10-13 14:53:09
 * @Last Modified by: PaddingMe
 * @Last Modified time: 2018-10-20 00:15:37
 */

const fibos = require('fibos')
const fs = require('fs')

const p2p_peer_address = require('./p2p.json')
const getAction = require('./getAction')
const env = require('./env')


console.notice('start FIBOS producer nodes')



// while (true) {
//   keys = console.readLine('input the producer-name:public-key:private-key ===> oooo:xxxxx:xxxx\n')
//   if (keys) break
// }

keys = env.producer.split(':')

const [producer_name, public_key, private_key] = keys

fibos.config_dir = './blockData'
fibos.data_dir = './blockData'


let chain_config = {
  'contracts-console': true, // 是否打印合约输出内容
  'chain-state-db-size-mb': 65536, // 区块数据库中允许的最大容量
  'reversible-blocks-db-size-mb': 10240, //最大能够回滚的数据量
  // 'delete-all-blocks': false // 启动时是否删除所有状态数据和区块数据
  // 'contracts-console': true, //开启内容输出
  //'chain-state-db-size-mb': 8 * 1024,
  // 'fix-reversible-blocks': false // 是否将数据恢复到不可逆高度，暂时无法使用
  // 'replay-blockchain': false // 是否清除状态数据然后回滚所有数据，暂时无法使用
  // 'truncate-at-block': false // 停止出块,并在该区块高度回滚，暂时无法使用
}

if (!fs.exists(fibos.data_dir) && !fs.exists(fibos.config_dir)) {
  chain_config['genesis-json'] = 'genesis.json' // 创世快数据路径
}


console.notice('config_dir: ', fibos.config_dir)
console.notice('data_dir: ', fibos.data_dir)

fibos.load('http', {
  'http-server-address': '127.0.0.1:8870', // 本地 http 服务地址, 默认127.0.0.1:8888
  'access-control-allow-origin': '*', // 允许跨域
  'http-validate-host': false, // 是否验证 http 请求 host
  'verbose-http-errors': true // 显示 http 返回的错误日志
  // 'https-server-address': '', // 本地https服务地址
  // 'max-body-size': '' // RPC请求允许最大字节 默认1024*1024(bytes)
})

fibos.load('net', {
  'p2p-peer-address': p2p_peer_address,
  'p2p-listen-endpoint': '0.0.0.0:9870',
  'max-clients': 0,
  // 'allowed-connection': 'producers' // 默认为 'any'
})

fibos.load('producer', {
  'producer-name': producer_name, // 控制节点出块的账户名
  'enable-stale-production': true, // 启用产生区块,即使区块是静止的
  'max-transaction-time': 3000, // 事务最大超时时间 默认30 s
  'private-key': JSON.stringify([public_key, private_key]), // 签名程序的公钥、私钥
  // 'greylist-account': '' // 无法使用 CPU 和 NET 的账号
  // 'max-irreversible-block-age': -1 // 最大的不可逆块时间默认-1
})


fibos.load('chain', chain_config)
fibos.load('chain_api')

fibos.load('history')
fibos.load('history_api')


fibos.load('wallet')
fibos.load('wallet_api')

fibos.load("emitter")

fibos.on('action', (at) => getAction(at))

// fibos.load('mongo_db', {
//   'mongodb-uri': 'mongodb://127.0.0.1:27017/fibos' // mongodb
// });

fibos.start()