#
# SQL Export
# Created by Querious (201046)
# Created: 2018年10月21日 GMT+8 上午2:52:03
# Encoding: Unicode (UTF-8)
#


DROP DATABASE IF EXISTS `fibos`;
CREATE DATABASE `fibos` DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;
USE `fibos`;




SET @PREVIOUS_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS;
SET FOREIGN_KEY_CHECKS = 0;


CREATE TABLE `accounts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '账户名',
  `abi` json DEFAULT NULL COMMENT 'abi 信息',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_accounts_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `accounts_keys` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '账户名',
  `public_key` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '公钥',
  `permission` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '权限名称',
  PRIMARY KEY (`id`),
  KEY `account` (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `actions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '合约拥有者账号',
  `transaction_id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '交易号',
  `seq` smallint(6) NOT NULL DEFAULT '0' COMMENT '序列号',
  `parent` bigint(20) NOT NULL DEFAULT '0',
  `name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'action 名称',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `data` json DEFAULT NULL COMMENT 'action 数据',
  `authorization` mediumtext COLLATE utf8mb4_unicode_ci COMMENT '执行权限',
  `eosto` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '提取 data 的 to 字段',
  `eosfrom` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '提取 data 的 from 字段',
  `receiver` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '提取 data 的 receiver 字段',
  `payer` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '提取 data 的 payer 字段',
  `newaccount` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '新建账号名称',
  `sellram_account` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '卖内存的用户名',
  PRIMARY KEY (`id`),
  KEY `idx_actions_account` (`account`),
  KEY `idx_actions_name` (`name`),
  KEY `idx_actions_tx_id` (`transaction_id`),
  KEY `idx_actions_created` (`created_at`),
  KEY `idx_actions_eosto` (`eosto`),
  KEY `idx_actions_eosfrom` (`eosfrom`),
  KEY `idx_actions_receiver` (`receiver`),
  KEY `idx_actions_payer` (`payer`),
  KEY `idx_actions_newaccount` (`newaccount`),
  KEY `idx_actions_sellram_account` (`sellram_account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `assets` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `supply` bigint(65) NOT NULL DEFAULT '0' COMMENT '已发行的 Token 量',
  `max_supply` bigint(65) NOT NULL DEFAULT '0' COMMENT '总 Token 量',
  `symbol_precision` int(2) NOT NULL DEFAULT '0' COMMENT 'Token 资产精度',
  `symbol` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'Token 资产符号',
  `issuer` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'Token 拥有者',
  `contract_owner` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'Token 合约拥有者',
  `logo_url` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'Token Logo 链接',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_symbol_owner` (`symbol`,`contract_owner`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `blocks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `block_id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '块号',
  `block_number` bigint(20) NOT NULL DEFAULT '0' COMMENT '块序列号',
  `prev_block_id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '上一个块的块号',
  `irreversible` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否不可逆',
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `transaction_merkle_root` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '区块交易的 merkel 根',
  `action_merkle_root` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '区块 action 的 merkel 根',
  `producer` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '区块生产者',
  `version` int(11) NOT NULL DEFAULT '0' COMMENT '版本号',
  `new_producers` json DEFAULT NULL COMMENT '新的区块生产者',
  `num_transactions` int(11) NOT NULL DEFAULT '0' COMMENT '区块生产的交易数量',
  `confirmed` int(11) NOT NULL DEFAULT '0' COMMENT '区块确认数',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_block_id` (`block_id`),
  KEY `idx_blocks_producer` (`producer`),
  KEY `idx_prev_block_id` (`prev_block_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `proposal` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `proposer` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT '多签发起者',
  `proposal_name` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT '多签提案名称',
  `requested_approvals` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '多签提案需要的权限',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_proposer_proposal_name` (`proposer`,`proposal_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `refunds` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '资源拥有者',
  `request_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `net_amount` bigint(65) NOT NULL DEFAULT '0' COMMENT '赎回的 net 资源',
  `cpu_amount` bigint(65) NOT NULL DEFAULT '0' COMMENT '赎回的 cpu 资源',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_refunds_owner` (`owner`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `rewards` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'producer 账号',
  `transaction_id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '交易号',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'action 名称',
  `data` json NOT NULL COMMENT 'action 数据',
  `type` tinyint(1) DEFAULT NULL COMMENT 'vpay=1 & bpay =2',
  `quantity` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '提取 data 的 from 字段',
  PRIMARY KEY (`id`),
  KEY `idx_actions_account` (`owner`),
  KEY `idx_actions_name` (`name`),
  KEY `idx_actions_tx_id` (`transaction_id`),
  KEY `idx_actions_created` (`created_at`),
  KEY `idx_actions_eosto` (`type`),
  KEY `idx_actions_eosfrom` (`quantity`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `stakes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '账号',
  `cpu_amount_by_self` bigint(65) NOT NULL DEFAULT '0' COMMENT '自己抵押的 cpu 资源',
  `net_amount_by_self` bigint(65) NOT NULL DEFAULT '0' COMMENT '自己抵押的 net 资源',
  `cpu_amount_by_other` bigint(65) NOT NULL DEFAULT '0' COMMENT '别人帮忙抵押的 cpu 资源',
  `net_amount_by_other` bigint(65) NOT NULL DEFAULT '0' COMMENT '别人帮忙抵押的 net 资源',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_stakes_account` (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `tokens` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '账号',
  `symbol` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'Token 资产符号',
  `balance` bigint(65) NOT NULL DEFAULT '0' COMMENT 'Token 余额',
  `symbol_precision` int(2) NOT NULL DEFAULT '0' COMMENT 'Token 资产精度',
  `contract_owner` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'Token 合约拥有者',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_symbol_owner_account` (`account`,`symbol`,`contract_owner`),
  KEY `idx_tokens_account` (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `traces` (
  `tx_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '交易号',
  `data` mediumtext COLLATE utf8mb4_unicode_ci COMMENT '交易结果集',
  `irreversible` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否不可逆',
  PRIMARY KEY (`tx_id`),
  UNIQUE KEY `idx_transactions_id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `transactions` (
  `tx_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '区块交易的 merkel 根',
  `block_num` bigint(20) NOT NULL DEFAULT '0' COMMENT '交易的区块号',
  `ref_block_num` bigint(20) NOT NULL DEFAULT '0' COMMENT '交易发起时的依赖区块号',
  `ref_block_prefix` bigint(20) NOT NULL DEFAULT '0' COMMENT '交易发起时的依赖区块前缀',
  `expiration` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '交易的过期时间',
  `pending` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否等待状态',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `num_actions` bigint(20) NOT NULL DEFAULT '0' COMMENT '交易中 action 的数量',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `irreversible` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否不可逆',
  PRIMARY KEY (`tx_id`),
  UNIQUE KEY `idx_transactions_id` (`id`),
  KEY `transactions_block_num` (`block_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `votes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `voter` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '账户名',
  `proxy` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '账号的投票代理人',
  `producers` json DEFAULT NULL COMMENT '账号所投节点的列表',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_votes_voter` (`voter`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




SET FOREIGN_KEY_CHECKS = @PREVIOUS_FOREIGN_KEY_CHECKS;


