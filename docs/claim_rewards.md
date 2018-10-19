```json
{
  "receipt": {
    "receiver": "eosio",
    "act_digest": "138de9ebdf5427eebc8629afd06ce7bb789b4f07dcc81037dbc1c560e1f51884",
    "auth_sequence": [
      [
        "eosecoeoseco",
        null
      ]
    ]
  },
  "act": {
    "account": "eosio",
    "name": "claimrewards",
    "authorization": [
      {
        "actor": "eosecoeoseco",
        "permission": "active"
      }
    ],
    "data": {
      "owner": "eosecoeoseco"
    },
    "hex_data": "4091c25451a43055"
  },
  "context_free": false,
  "console": "",
  "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
  "block_time": "2018-08-30T01:31:35.000",
  "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
  "account_ram_deltas": [],
  "inline_traces": [
    {
      "receipt": {
        "receiver": "eosio.token",
        "act_digest": "67369181dae851c50882aab4a4c1900a8a2dd523aa6de42d5f549af8826701c3",
        "auth_sequence": [
          [
            "eosio",
            null
          ]
        ]
      },
      "act": {
        "account": "eosio.token",
        "name": "issue",
        "authorization": [
          {
            "actor": "eosio",
            "permission": "active"
          }
        ],
        "data": {
          "to": "eosio",
          "quantity": "2753252.8025 FO",
          "memo": "issue tokens for producer pay and savings"
        },
        "hex_data": "0000000000ea3055990911690600000004464f000000000029697373756520746f6b656e7320666f722070726f64756365722070617920616e6420736176696e6773"
      },
      "context_free": false,
      "console": "",
      "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
      "block_time": "2018-08-30T01:31:35.000",
      "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
      "account_ram_deltas": [],
      "inline_traces": []
    },
    {
      "receipt": {
        "receiver": "eosio.token",
        "act_digest": "5cd009c8f55ce5c776f7f0de70d479ddb8c8fa55ba18435ff54d1ae265f7b746",
        "auth_sequence": [
          [
            "eosio",
            null
          ]
        ]
      },
      "act": {
        "account": "eosio.token",
        "name": "transfer",
        "authorization": [
          {
            "actor": "eosio",
            "permission": "active"
          }
        ],
        "data": {
          "from": "eosio",
          "to": "eosio.saving",
          "quantity": "2202602.2420 FO",
          "memo": "unallocated inflation"
        },
        "hex_data": "0000000000ea3055c0a6db0603ea3055146eda200500000004464f000000000015756e616c6c6f636174656420696e666c6174696f6e"
      },
      "context_free": false,
      "console": "",
      "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
      "block_time": "2018-08-30T01:31:35.000",
      "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
      "account_ram_deltas": [],
      "inline_traces": [
        {
          "receipt": {
            "receiver": "eosio.token",
            "act_digest": "b49357ce324dcd780669a6708177f790805d33aadf8a6ed27b7d2ba17775bb77",
            "auth_sequence": [
              [
                "eosio",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "exretire",
            "authorization": [
              {
                "actor": "eosio",
                "permission": "active"
              }
            ],
            "data": {
              "from": "eosio",
              "quantity": {
                "quantity": "2202602.2420 FO",
                "contract": "eosio"
              },
              "memo": "issue tokens for producer pay and savings"
            },
            "hex_data": "0000000000ea3055146eda200500000004464f00000000000000000000ea305529697373756520746f6b656e7320666f722070726f64756365722070617920616e6420736176696e6773"
          },
          "context_free": false,
          "console": "",
          "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
          "block_time": "2018-08-30T01:31:35.000",
          "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
          "account_ram_deltas": [],
          "inline_traces": []
        }
      ]
    },
    {
      "receipt": {
        "receiver": "eosio.token",
        "act_digest": "e1318c9dbbdac64fe24095536e9a5fe3e11acda78fa90464c3edca30050022ab",
        "auth_sequence": [
          [
            "eosio",
            null
          ]
        ]
      },
      "act": {
        "account": "eosio.token",
        "name": "transfer",
        "authorization": [
          {
            "actor": "eosio",
            "permission": "active"
          }
        ],
        "data": {
          "from": "eosio",
          "to": "eosio.bpay",
          "quantity": "137662.6401 FO",
          "memo": "fund per-block bucket"
        },
        "hex_data": "0000000000ea3055008037f500ea3055e1a60d520000000004464f00000000001566756e64207065722d626c6f636b206275636b6574"
      },
      "context_free": false,
      "console": "",
      "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
      "block_time": "2018-08-30T01:31:35.000",
      "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
      "account_ram_deltas": [],
      "inline_traces": [
        {
          "receipt": {
            "receiver": "eosio",
            "act_digest": "e1318c9dbbdac64fe24095536e9a5fe3e11acda78fa90464c3edca30050022ab",
            "auth_sequence": [
              [
                "eosio",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "eosio",
                "permission": "active"
              }
            ],
            "data": {
              "from": "eosio",
              "to": "eosio.bpay",
              "quantity": "137662.6401 FO",
              "memo": "fund per-block bucket"
            },
            "hex_data": "0000000000ea3055008037f500ea3055e1a60d520000000004464f00000000001566756e64207065722d626c6f636b206275636b6574"
          },
          "context_free": false,
          "console": "",
          "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
          "block_time": "2018-08-30T01:31:35.000",
          "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
          "account_ram_deltas": [],
          "inline_traces": []
        },
        {
          "receipt": {
            "receiver": "eosio.bpay",
            "act_digest": "e1318c9dbbdac64fe24095536e9a5fe3e11acda78fa90464c3edca30050022ab",
            "auth_sequence": [
              [
                "eosio",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "eosio",
                "permission": "active"
              }
            ],
            "data": {
              "from": "eosio",
              "to": "eosio.bpay",
              "quantity": "137662.6401 FO",
              "memo": "fund per-block bucket"
            },
            "hex_data": "0000000000ea3055008037f500ea3055e1a60d520000000004464f00000000001566756e64207065722d626c6f636b206275636b6574"
          },
          "context_free": false,
          "console": "",
          "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
          "block_time": "2018-08-30T01:31:35.000",
          "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
          "account_ram_deltas": [],
          "inline_traces": []
        }
      ]
    },
    {
      "receipt": {
        "receiver": "eosio.token",
        "act_digest": "1a4dae63d284129932d721b05c8f663abf73d853e04b4e11570169a1421999de",
        "auth_sequence": [
          [
            "eosio",
            null
          ]
        ]
      },
      "act": {
        "account": "eosio.token",
        "name": "transfer",
        "authorization": [
          {
            "actor": "eosio",
            "permission": "active"
          }
        ],
        "data": {
          "from": "eosio",
          "to": "eosio.vpay",
          "quantity": "412987.9204 FO",
          "memo": "fund per-vote bucket"
        },
        "hex_data": "0000000000ea30550080377503ea3055a4f428f60000000004464f00000000001466756e64207065722d766f7465206275636b6574"
      },
      "context_free": false,
      "console": "",
      "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
      "block_time": "2018-08-30T01:31:35.000",
      "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
      "account_ram_deltas": [],
      "inline_traces": [
        {
          "receipt": {
            "receiver": "eosio",
            "act_digest": "1a4dae63d284129932d721b05c8f663abf73d853e04b4e11570169a1421999de",
            "auth_sequence": [
              [
                "eosio",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "eosio",
                "permission": "active"
              }
            ],
            "data": {
              "from": "eosio",
              "to": "eosio.vpay",
              "quantity": "412987.9204 FO",
              "memo": "fund per-vote bucket"
            },
            "hex_data": "0000000000ea30550080377503ea3055a4f428f60000000004464f00000000001466756e64207065722d766f7465206275636b6574"
          },
          "context_free": false,
          "console": "",
          "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
          "block_time": "2018-08-30T01:31:35.000",
          "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
          "account_ram_deltas": [],
          "inline_traces": []
        },
        {
          "receipt": {
            "receiver": "eosio.vpay",
            "act_digest": "1a4dae63d284129932d721b05c8f663abf73d853e04b4e11570169a1421999de",
            "auth_sequence": [
              [
                "eosio",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "eosio",
                "permission": "active"
              }
            ],
            "data": {
              "from": "eosio",
              "to": "eosio.vpay",
              "quantity": "412987.9204 FO",
              "memo": "fund per-vote bucket"
            },
            "hex_data": "0000000000ea30550080377503ea3055a4f428f60000000004464f00000000001466756e64207065722d766f7465206275636b6574"
          },
          "context_free": false,
          "console": "",
          "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
          "block_time": "2018-08-30T01:31:35.000",
          "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
          "account_ram_deltas": [],
          "inline_traces": []
        }
      ]
    },
    {
      "receipt": {
        "receiver": "eosio.token",
        "act_digest": "10ca4ebbd43c531690c11c77221e415bb841d8bf631c5d50cde7f0d1d17eac09",
        "auth_sequence": [
          [
            "eosecoeoseco",
            null
          ],
          [
            "eosio.bpay",
            null
          ]
        ]
      },
      "act": {
        "account": "eosio.token",
        "name": "transfer",
        "authorization": [
          {
            "actor": "eosio.bpay",
            "permission": "active"
          },
          {
            "actor": "eosecoeoseco",
            "permission": "active"
          }
        ],
        "data": {
          "from": "eosio.bpay",
          "to": "eosecoeoseco",
          "quantity": "10155.2848 FO",
          "memo": "producer block pay"
        },
        "hex_data": "008037f500ea30554091c25451a43055d0920d060000000004464f00000000001270726f647563657220626c6f636b20706179"
      },
      "context_free": false,
      "console": "",
      "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
      "block_time": "2018-08-30T01:31:35.000",
      "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
      "account_ram_deltas": [
        {
          "account": "eosecoeoseco"
        }
      ],
      "inline_traces": [
        {
          "receipt": {
            "receiver": "eosio.bpay",
            "act_digest": "10ca4ebbd43c531690c11c77221e415bb841d8bf631c5d50cde7f0d1d17eac09",
            "auth_sequence": [
              [
                "eosecoeoseco",
                null
              ],
              [
                "eosio.bpay",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "eosio.bpay",
                "permission": "active"
              },
              {
                "actor": "eosecoeoseco",
                "permission": "active"
              }
            ],
            "data": {
              "from": "eosio.bpay",
              "to": "eosecoeoseco",
              "quantity": "10155.2848 FO",
              "memo": "producer block pay"
            },
            "hex_data": "008037f500ea30554091c25451a43055d0920d060000000004464f00000000001270726f647563657220626c6f636b20706179"
          },
          "context_free": false,
          "console": "",
          "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
          "block_time": "2018-08-30T01:31:35.000",
          "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
          "account_ram_deltas": [],
          "inline_traces": []
        },
        {
          "receipt": {
            "receiver": "eosecoeoseco",
            "act_digest": "10ca4ebbd43c531690c11c77221e415bb841d8bf631c5d50cde7f0d1d17eac09",
            "auth_sequence": [
              [
                "eosecoeoseco",
                null
              ],
              [
                "eosio.bpay",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "eosio.bpay",
                "permission": "active"
              },
              {
                "actor": "eosecoeoseco",
                "permission": "active"
              }
            ],
            "data": {
              "from": "eosio.bpay",
              "to": "eosecoeoseco",
              "quantity": "10155.2848 FO",
              "memo": "producer block pay"
            },
            "hex_data": "008037f500ea30554091c25451a43055d0920d060000000004464f00000000001270726f647563657220626c6f636b20706179"
          },
          "context_free": false,
          "console": "",
          "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
          "block_time": "2018-08-30T01:31:35.000",
          "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
          "account_ram_deltas": [],
          "inline_traces": []
        }
      ]
    },
    {
      "receipt": {
        "receiver": "eosio.token",
        "act_digest": "65398b8286b9fe1379132dbbf280f057fd15b6b1f421d7a23ad6f9958e315552",
        "auth_sequence": [
          [
            "eosecoeoseco",
            null
          ],
          [
            "eosio.vpay",
            null
          ]
        ]
      },
      "act": {
        "account": "eosio.token",
        "name": "transfer",
        "authorization": [
          {
            "actor": "eosio.vpay",
            "permission": "active"
          },
          {
            "actor": "eosecoeoseco",
            "permission": "active"
          }
        ],
        "data": {
          "from": "eosio.vpay",
          "to": "eosecoeoseco",
          "quantity": "39053.8993 FO",
          "memo": "producer vote pay"
        },
        "hex_data": "0080377503ea30554091c25451a43055f12647170000000004464f00000000001170726f647563657220766f746520706179"
      },
      "context_free": false,
      "console": "",
      "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
      "block_time": "2018-08-30T01:31:35.000",
      "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
      "account_ram_deltas": [
        {
          "account": "eosio"
        },
        {
          "account": "eosio.vpay"
        }
      ],
      "inline_traces": [
        {
          "receipt": {
            "receiver": "eosio.vpay",
            "act_digest": "65398b8286b9fe1379132dbbf280f057fd15b6b1f421d7a23ad6f9958e315552",
            "auth_sequence": [
              [
                "eosecoeoseco",
                null
              ],
              [
                "eosio.vpay",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "eosio.vpay",
                "permission": "active"
              },
              {
                "actor": "eosecoeoseco",
                "permission": "active"
              }
            ],
            "data": {
              "from": "eosio.vpay",
              "to": "eosecoeoseco",
              "quantity": "39053.8993 FO",
              "memo": "producer vote pay"
            },
            "hex_data": "0080377503ea30554091c25451a43055f12647170000000004464f00000000001170726f647563657220766f746520706179"
          },
          "context_free": false,
          "console": "",
          "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
          "block_time": "2018-08-30T01:31:35.000",
          "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
          "account_ram_deltas": [],
          "inline_traces": []
        },
        {
          "receipt": {
            "receiver": "eosecoeoseco",
            "act_digest": "65398b8286b9fe1379132dbbf280f057fd15b6b1f421d7a23ad6f9958e315552",
            "auth_sequence": [
              [
                "eosecoeoseco",
                null
              ],
              [
                "eosio.vpay",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "eosio.vpay",
                "permission": "active"
              },
              {
                "actor": "eosecoeoseco",
                "permission": "active"
              }
            ],
            "data": {
              "from": "eosio.vpay",
              "to": "eosecoeoseco",
              "quantity": "39053.8993 FO",
              "memo": "producer vote pay"
            },
            "hex_data": "0080377503ea30554091c25451a43055f12647170000000004464f00000000001170726f647563657220766f746520706179"
          },
          "context_free": false,
          "console": "",
          "trx_id": "27e5f400325083cba36c81fb4150c7b51acc5b87b8ea22836efd88d1038f1c06",
          "block_time": "2018-08-30T01:31:35.000",
          "producer_block_id": "000567642c8ed3ac4f5bb41d03f42fefb81d2dbf1545a63af9d5cd4bb4ac1076",
          "account_ram_deltas": [],
          "inline_traces": []
        }
      ]
    }
  ]
}
```