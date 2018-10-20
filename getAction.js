const JSONbig = require('json-bigint')
const db = require('db')
const fs = require('fs')
const env = require('./env')
const mysql = db.openMySQL(env.mysql_uri)

module.exports = (at) => {

  let trx_id = at.trx_id
  let block_time = new Date(at.block_time).toISOString().slice(0, 19).replace('T', ' ');
  let actioname = at.act.name
  let data = at.act.data

  if(actioname === 'claimrewards') {

    // fs.appendFile('./logs/claim_rewards.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')

    let owner = data.owner
    let sql = "INSERT INTO rewards(`owner`,`transaction_id`,`created_at`, `name`, `data`) VALUES ('" + owner + "','" + trx_id + "','" + block_time + "','" + actioname+ "','" + JSON.stringify(data) + "') ON DUPLICATE KEY UPDATE `transaction_id` = '" + trx_id + "'"

    mysql.execute(sql)

    let inline_traces = at.inline_traces // 数组
    let inline_traces_length = inline_traces.length

    let payObj = inline_traces[inline_traces_length -1]
    let trx_id1 = payObj && payObj.trx_id
    let name = payObj && payObj.act && payObj.act.name
    let block_time1 = payObj && payObj.block_time
    let payActData =  payObj && payObj.act && payObj.act.data || null
    let pay = payActData.quantity || '0'
    // vpay=1 & bpay =2
    let type = payActData.from === 'eosio.vpay' ? 1 : ( payActData.from === 'eosio.bpay'? 2 : '')
    if (payActData.to === owner) {
      let sql = "INSERT INTO rewards(`owner`,`transaction_id`,`created_at`, `name`, `data`,`type`, `quantity`) VALUES ('" + owner + "','" + trx_id1 + "','" + block_time1 + "','" + name+ "','" + JSON.stringify(payActData)  + "'," + type + ",'" + pay + "') ON DUPLICATE KEY UPDATE `transaction_id` = '" + trx_id + "'"
      console.error(sql)
      mysql.execute(sql)
    }

    let payObj2 = inline_traces[inline_traces_length -2]
    let trx_id2 = payObj2 && payObj2.trx_id
    let block_time2 = payObj2 && payObj2.block_time
    let name2 = payObj2 && payObj2.act && payObj2.act.name
    let payActData2 =  payObj2 && payObj2.act && payObj2.act.data || null
    let pay2 = payActData2.quantity || 0
    // vpay=1 & bpay =2
    let type2 = payActData2.from === 'eosio.vpay' ? 1 : ( payActData2.from === 'eosio.bpay'? 2 : '')

    if (payActData2.to === owner) {
      let sql = "INSERT INTO rewards(`owner`,`transaction_id`,`created_at`, `name`, `data`,`type`, `quantity`) VALUES ('" + owner + "','" + trx_id2 + "','" + block_time2 + "','" + name2 + "','" + JSON.stringify(payActData2)  + "'," + type2 + ",'" + pay2 + "') ON DUPLICATE KEY UPDATE `transaction_id` = '" + trx_id2 + "'"
      console.error(sql)
      mysql.execute(sql)
    }
    return false
  }


 /*
  if(actioname === 'regproducer') {
    // fs.appendFile('./logs/regproducer.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
    let prodcuer = data.prodcuer
    let producer_key = data.producer_key
    let url = data.url
    return mysql.execute('INSERT INTO vote(`prodcuer`, `producer_key`, `url`, `is_active`,`trx_id`, `block_time`, `type`) VALUES (?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE trx_id = ?', [`'${prodcuer}'`, `'${producer_key}'`, `'${url}'`, `'${trx_id}'`, 1, `'${block_time}'`, 'regproducer', `'${trx_id}'`])
  }

  // unregprod 把状态改一下 active=0`
  if(actioname === 'unregprod') {
    // fs.appendFile('./logs/unregprod.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
    let prodcuer = data.prodcuer
    return mysql.execute('INSERT INTO vote(`prodcuer`,`is_active`,`trx_id`, `block_time`, `type`) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE trx_id = ?', [`'${prodcuer}'`, 1, `'${trx_id}'`, `'${block_time}'`, 'unregprod', `'${trx_id}'`])
  }

  // TODO voteproducer 当前用户最新的就可以
  if(actioname === 'voteproducer') {
    // fs.appendFile('./logs/vote_producer.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')

    let vote_by_voter = data.voter
    // TODO 得查询下 vote_by_voter 上一个 voters 的数组
    let voter_producers = data.producers
    // 然后看当前 voter_producers 与 voters的变化
    // 如果有增加呢，应该 该 producer 增加相应的票
    // 如果有减少呢，应该 该 producer 减少相应的票

    voter_producers.map((producer) => {

    })

    let voters = []

    let vote_proxy = data.proxy

    // return mysql.execute('INSERT INTO vote(`prodcuer`,`is_active`,`trx_id`, `block_time`) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE trx_id = ?', [`'${prodcuer}'`, 1, `'${trx_id}'`, `'${block_time}'`, `'${trx_id}'`])
  }


  // delegatebw
  if(actioname === 'delegatebw') {
    // fs.appendFile('./logs/delegatebw.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
    // TODO 先要查询 stake_from 查到 vote_stake_quantity
    // 再用 vote_stake_quantity + stake_net_quantity
    // 得到最新的 vote_stake_quantity
    let stake_from = data.from
    let stake_receiver = data.receiver
    let stake_net_quantity = data.stake_net_quantity
    let stake_cpu_quantity = data.stake_cpu_quantity
    let vote_stake_quantity = 0
    // 多对多了擦擦
    // mysql.execute('INSERT INTO vote(`prodcuer`,`vpay`,`trx_id`, `block_time`, `type`) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE trx_id = ?', [`'${prodcuer}'`, `'${vpay}'`, `'${v_trx_id}'`, `'${v_block_time}'`, 'claimrewards', `'${v_trx_id}'`])
  }

*/
  // if(actioname === 'extransfer' || actioname === 'transfer') {
  //     // fs.appendFile('./logs/transfer_info.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  //     let from = data.from;
  //     let to = data.to;
  //     let memo = data.memo;
  //     let quantity = data.quantity.quantity ? data.quantity.quantity: '';
  //     let contract = data.quantity.contract ? data.quantity.contract: '';
  //     // mysql.execute('INSERT INTO transfer_info(from, to, memo, trx_id, quantity, contract) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE trx_id = ?', [from, to, memo, trx_id, quantity, contract, trx_id])
  //     let sql = "INSERT INTO transfer_info(`from`, `to`, `memo`, `trx_id`, `quantity`, `contract`) VALUES ('"+ from +"','"+ to +"','"+ memo +"','"+ trx_id +"','"+ quantity +"','"+ contract +"') ON DUPLICATE KEY UPDATE trx_id = " + "'" + trx_id + "'"
  //     // INSERT INTO transfer_info(`from`, `to`, `memo`, `trx_id`, `quantity`, `contract`) VALUES ('kuailekuaile','huluwahuluwa','from liucc','b544afe344ddfd8754d457d97a43caf5855d94d6991f27c3718361ee76e7bc19','','') ON DUPLICATE KEY UPDATE trx_id = "b544afe344ddfd8754d457d97a43caf5855d94d6991f27c3718361ee76e7bc19"
  //     console.log(sql)
  //     mysql.execute(sql);
  // }


  /*




  // undelegatebw
  if(actioname === 'undelegatebw') {
    fs.appendFile('./logs/undelegatebw.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }



  // regproducer name/timestamp/active=1
  // regproxy
  if(actioname === 'regproxy') {
    fs.appendFile('./logs/regproxy.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }
*/
}