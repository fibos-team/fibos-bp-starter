```json
{
  "receipt": {
    "receiver": "eosio",
    "act_digest": "e7f609a431ea8eb417222bbe3163efd42a8fb226de113bd60f4e15e4fdd667e0",
    "auth_sequence": [
      [
        "hellomyworld",
        null
      ]
    ]
  },
  "act": {
    "account": "eosio",
    "name": "delegatebw",
    "authorization": [
      {
        "actor": "hellomyworld",
        "permission": "active"
      }
    ],
    "data": {
      "from": "hellomyworld",
      "receiver": "funoooooooo3",
      "stake_net_quantity": "0.1000 FO",
      "stake_cpu_quantity": "0.1000 FO"
    },
    "hex_data": "90e2a5dc4b1aa36a3028a594524aa75ee80300000000000004464f0000000000e80300000000000004464f000000000000"
  },
  "context_free": false,
  "console": "",
  "trx_id": "dadf80b8ebc98dfb3b92df2cd7446f4f2c2a3901fade512199a25dade84c38da",
  "block_time": "2018-08-28T14:02:32.000",
  "producer_block_id": "000189058cd5591e48a358da8da54f78324062f6d9685ff690d24bb3ffc9a8c5",
  "account_ram_deltas": [
    {
      "account": "hellomyworld"
    }
  ],
  "inline_traces": [
    {
      "receipt": {
        "receiver": "eosio.token",
        "act_digest": "7400e174566cd8e39abc925d612038307e900d64929adad488aa5f9a01239154",
        "auth_sequence": [
          [
            "hellomyworld",
            null
          ]
        ]
      },
      "act": {
        "account": "eosio.token",
        "name": "transfer",
        "authorization": [
          {
            "actor": "hellomyworld",
            "permission": "active"
          }
        ],
        "data": {
          "from": "hellomyworld",
          "to": "eosio.stake",
          "quantity": "0.2000 FO",
          "memo": "stake bandwidth"
        },
        "hex_data": "90e2a5dc4b1aa36a0014341903ea3055d00700000000000004464f00000000000f7374616b652062616e647769647468"
      },
      "context_free": false,
      "console": "",
      "trx_id": "dadf80b8ebc98dfb3b92df2cd7446f4f2c2a3901fade512199a25dade84c38da",
      "block_time": "2018-08-28T14:02:32.000",
      "producer_block_id": "000189058cd5591e48a358da8da54f78324062f6d9685ff690d24bb3ffc9a8c5",
      "account_ram_deltas": [],
      "inline_traces": [
        {
          "receipt": {
            "receiver": "hellomyworld",
            "act_digest": "7400e174566cd8e39abc925d612038307e900d64929adad488aa5f9a01239154",
            "auth_sequence": [
              [
                "hellomyworld",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "hellomyworld",
                "permission": "active"
              }
            ],
            "data": {
              "from": "hellomyworld",
              "to": "eosio.stake",
              "quantity": "0.2000 FO",
              "memo": "stake bandwidth"
            },
            "hex_data": "90e2a5dc4b1aa36a0014341903ea3055d00700000000000004464f00000000000f7374616b652062616e647769647468"
          },
          "context_free": false,
          "console": "",
          "trx_id": "dadf80b8ebc98dfb3b92df2cd7446f4f2c2a3901fade512199a25dade84c38da",
          "block_time": "2018-08-28T14:02:32.000",
          "producer_block_id": "000189058cd5591e48a358da8da54f78324062f6d9685ff690d24bb3ffc9a8c5",
          "account_ram_deltas": [],
          "inline_traces": []
        },
        {
          "receipt": {
            "receiver": "eosio.stake",
            "act_digest": "7400e174566cd8e39abc925d612038307e900d64929adad488aa5f9a01239154",
            "auth_sequence": [
              [
                "hellomyworld",
                null
              ]
            ]
          },
          "act": {
            "account": "eosio.token",
            "name": "transfer",
            "authorization": [
              {
                "actor": "hellomyworld",
                "permission": "active"
              }
            ],
            "data": {
              "from": "hellomyworld",
              "to": "eosio.stake",
              "quantity": "0.2000 FO",
              "memo": "stake bandwidth"
            },
            "hex_data": "90e2a5dc4b1aa36a0014341903ea3055d00700000000000004464f00000000000f7374616b652062616e647769647468"
          },
          "context_free": false,
          "console": "",
          "trx_id": "dadf80b8ebc98dfb3b92df2cd7446f4f2c2a3901fade512199a25dade84c38da",
          "block_time": "2018-08-28T14:02:32.000",
          "producer_block_id": "000189058cd5591e48a358da8da54f78324062f6d9685ff690d24bb3ffc9a8c5",
          "account_ram_deltas": [],
          "inline_traces": []
        }
      ]
    }
  ]
}
```