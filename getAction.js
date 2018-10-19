const JSONbig = require('json-bigint')
const db = require('db')
const env = require('./env')
const mysql = db.openMySQL(env.mysql_uri)

module.exports = (at) => {

  let acitonname = at.act.name;

  if(acitonname === 'extransfer' || acitonname === 'transfer') {
      // fs.appendFile('./logs/transfer_info.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
      let trx_id = at.trx_id
      let data = at.act.data;
      let from = data.from;
      let to = data.to;
      let memo = data.memo;
      let quantity = data.quantity.quantity ? data.quantity.quantity: '';
      let contract = data.quantity.contract ? data.quantity.contract: '';
      // mysql.execute('INSERT INTO transfer_info(from, to, memo, trx_id, quantity, contract) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE trx_id = ?', [from, to, memo, trx_id, quantity, contract, trx_id])
      let sql = "INSERT INTO transfer_info(`from`, `to`, `memo`, `trx_id`, `quantity`, `contract`) VALUES ('"+ from +"','"+ to +"','"+ memo +"','"+ trx_id +"','"+ quantity +"','"+ contract +"') ON DUPLICATE KEY UPDATE trx_id = " + "'" + trx_id + "'"
      // INSERT INTO transfer_info(`from`, `to`, `memo`, `trx_id`, `quantity`, `contract`) VALUES ('kuailekuaile','huluwahuluwa','from liucc','b544afe344ddfd8754d457d97a43caf5855d94d6991f27c3718361ee76e7bc19','','') ON DUPLICATE KEY UPDATE trx_id = "b544afe344ddfd8754d457d97a43caf5855d94d6991f27c3718361ee76e7bc19"
      console.log(sql)
      mysql.execute(sql);
  }

  /*
  // voteproducer 当前用户最新的就可以。 voter 为主键
  if(acitonname === 'voteproducer') {
    fs.appendFile('./logs/vote_producer.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }

  // voteproducer 当前用户最新的就可以。 voter 为主键
  if(acitonname === 'voteproducer') {
    fs.appendFile('./logs/vote_producer.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }

  // delegatebw
  if(acitonname === 'delegatebw') {
    fs.appendFile('./logs/delegatebw.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }

  // undelegatebw
  if(acitonname === 'undelegatebw') {
    fs.appendFile('./logs/undelegatebw.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }

  // claimrewards 记录每一条 查看他的 prodcuer/tiemstamp/bpay/vapy
  if(acitonname === 'claimrewards') {
    fs.appendFile('./logs/claim_rewards.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }


  // unregprod 把状态改一下 active=0
  if(acitonname === 'unregprod') {
    fs.appendFile('./logs/unregprod.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }

  // regproducer name/timestamp/active=1
  if(acitonname === 'regproducer') {
    fs.appendFile('./logs/regproducer.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }
  // regproxy
  if(acitonname === 'regproxy') {
    fs.appendFile('./logs/regproxy.log', JSONbig.stringify(at, null, 2) + '\n--------------------\n')
  }
*/
}