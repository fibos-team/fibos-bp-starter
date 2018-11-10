/*
 * 开启 producer
 * @Author: PaddingMe (BP:liuqiangdong)
 * @Date: 2018-11-11 00:31:55
 * @Last Modified by: PaddingMe
 * @Last Modified time: 2018-11-11 00:50:35
 */


const fibos = require('fibos')
var fs = require('fs')


const { p2p_peer_address, p2p_listen_endpoint } = require('./p2p.json')

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
}

if (!fs.exists(fibos.data_dir) && !fs.exists(fibos.config_dir)) {
  chain_config['genesis-json'] = 'genesis.json' // 创世快数据路径
}

console.notice('config_dir: ', fibos.config_dir)
console.notice('data_dir: ', fibos.data_dir)



fibos.load('net', {
  'p2p-peer-address': p2p_peer_address,
  'p2p-listen-endpoint': p2p_listen_endpoint,
  'max-clients': 0,
  // 'allowed-connection': 'producers' // 默认为 'any'
})



fibos.load('producer', {
  'producer-name': producer_name, // 控制节点出块的账户名
  'enable-stale-production': true, // 启用产生区块,即使区块是静止的
  'max-transaction-time': 3000, // 事务最大超时时间 默认30 s
  'signature-provider': `${public_key}=KEY:${private_key}`,
  // 'greylist-account': '' // 无法使用 CPU 和 NET 的账号
  // 'max-irreversible-block-age': -1 // 最大的不可逆块时间默认-1
})

fibos.load('chain', chain_config)
fibos.load('chain_api')

fibos.start()