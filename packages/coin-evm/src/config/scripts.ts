const SCRIPTS = {
  signTransaction: {
    script: `03040601C707000000003C11ACC7CC3A1704511507C002FF00A00700C2ACD70032FFF8C2ACD7001EFFF6C2ACD70028FFF6CC071094CAA02700C2A2D700FFF6CC07108012AC17C03A0401061507C002FF00B5AC17003AC2ACB7003BCC07C0028080BE07101AAC17C04904001507C01F12AC17C0490401071507C002FF00B5AC170049CAACBE004ADEE09700250E0012AC17C0410401071507C002FF00B5AC170041CAACBE0042DEE09700250E00CC0FC0023078BAA02F6C0E04DDF09700DAA2D7C0FFF612D207CC05065052455353425554546F4E`,
    signature:
      `30440220233F2FBBFD87F062C7858C19A690E420381C6F53401691ECE4BFBC0B2CE00E8C022019892E22C4FFD630E38D9DBCA5F9785C3E028A17EBF65CF429814195D0936C25`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signERC20Transaction: {
    script: `03040601C707000000003C11ACC7CC3C1704531507C002FF00A00700C2ACD70034FFF8C2A5D700FFF6C2ACD7002AFFF6CC071094CAAC2700A4CC07C01380B844a9059cbb000000000000000000000000CAA02700CC07200000000000000000000000000000000000000000CAA2C7000C12AC17C03C0401061507C002FF00B5AC17003CC2ACB7003DCC07C0028080BE07101AAC17C04B04001507C01F12AC17C04B0401071507C002FF00B5AC17004BCAACBE004CDEE09700250E0012AC17C0430401071507C002FF00B5AC170043CAACBE0044DEE09700250E0011ACC7CC9B1D04B81507C004CC0F104012AC17C09C0401071507C002FF00B5AC17009CCAACBF009DDEF09700250F00CC0FC0023078BAA02F6C0E04DDF0970012AC17C09B0400141507C002FF00B5AC17009BDAA2C7B00CD207CC05065052455353425554546F4E`,
    signature:
      `304402200B343A6EBBD31DE90495CD482D04677B02A3278AF4F546F0865D86C9071C651D02202F666136FEEB43EE85FC93C47E92AB30FF2C8D268FC9DD3CFB1F3E06FFE1D208`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signSmartContractTransaction: {
    script: `03040601C707000000003C11ACC7CC3A1704511507C002FF00A00700C2ACD70032FFF8C2ACD7001EFFF6C2ACD70028FFF6CC071094CAA02700C2A2D700FFF6C2AC97009912AC17C03A0401061507C002FF00B5AC17003AC2ACB7003BCC07C0028080BE07101AAC17C04904001507C01F12AC17C0490401071507C002FF00B5AC170049CAACBE004ADEE09700250E0012AC17C0410401071507C002FF00B5AC170041CAACBE0042DEE09700250E00D207C005534D415254D207CC05065052455353425554546F4E`,
    signature:
      `3045022100B8AAAB03BF6863E9817E371DEEF7F7280CD4A2F489D9B495CC2529783EE617FB022044C6D0BA4E5471BD0F2B3A10B2CA1F8A490BEEE956A8A7FC2A64594B4D05AA10`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signSmartContractSegmentTransaction: {
    script: `03050601C707000000003C11ACC7CC3E1704551507C002FF00A00700C2ACD70032FFF8C2ACD7001EFFF6C2ACD70028FFF6CC071094CAA02700C2A2D700FFF6C4ACC7003A0412AC17C03E0401061507C002FF00B5AC17003EC2ACB7003FCC07C0028080BE07101AAC17C04D04001507C01F12AC17C04D0401071507C002FF00B5AC17004DCAACBE004EDEE09700250E0012AC17C0450401071507C002FF00B5AC170045CAACBE0046DEE09700250E00D207C005534D415254D207CC05065052455353425554546F4E`,
    signature:
      `30450220283BAE00DEF6E51D430DB1FAD4F66E5E063E161A83E23790A1C5BDC8FD16B0DD0221009A8D7F6CFB48E18EF3942BC9D6F99EE9077CDBD2BE3AAB04FAC6F3B94F7742E3`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signStakingTransaction: {
    script: `03040601C707000000003C11ACC7CC3A1704511507C002FF00A00700C2ACD70032FFF8C2ACD7001EFFF6C2ACD70028FFF6CC071094CAA02700C2A2D700FFF6C2AC97009912AC17C03A0401061507C002FF00B5AC17003AC2ACB7003BCC07C0028080BE07101AAC17C04904001507C01F12AC17C0490401071507C002FF00B5AC170049CAACBE004ADEE09700250E0012AC17C0410401071507C002FF00B5AC170041CAACBE0042DEE09700250E00D207C0055354414B45D207CC05065052455353425554546F4E`,
    signature:
      `30450221009F2B7D04EFE25068B31DB55AB0737F6EF27E73EF2574CF2254732224FD297BF5022020BB5E072DC71224B2C73CA6199C9E39588295AD7C43069EC84F70FFED5209F1`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signMessage: {
    script: `03000601C707000000003C11A0C7CC1704171507C002FF00CC07C01A19457468657265756D205369676E6564204D6573736167653A0ACAAC97005F1AAC17C00F04001507C01F12AC17C00F0401071507C002FF00B5AC17000FCAACBE0010DEE09700250E0012AC17C0070401071507C002FF00B5AC170007CAACBE0008DEE09700250E00D207C0074D455353414745D207CC05065052455353425554546F4E`,
    signature:
      `30440220423678B5E6EC62692F0702153AC88E67F8799E263537755388DEDD4F8C5170E00220364EDAE205034711C178E8B26A4F5346ADCE92B689A102D32C60BA4D1EE82E37`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signTypedData: {
    script: `03000601C707000000003C11A5C7CC1704371507C002FF00CC07C0021901CAA057005AAC97C07F061AAC17C02F04001507C01F12AC17C02F0401071507C002FF00B5AC17002FCAACBE0030DEE09700250E0012AC17C0270401071507C002FF00B5AC170027CAACBE0028DEE09700250E00D207C006454950373132D207CC05065052455353425554546F4E`,
    signature:
      `3045022100F34BCB5427693483C29047DC6F66C42A9D818B26CA11EC4551E394738DFC3366022035873EB1211D39441CB94798FA20D7773FE8DE121ED5C6EE66E289DA9E992E95`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signEIP1559Transaction: {
    script: `03040601C707000000003C11ACC7CC4417045B1507C002FF00CC071002A0070012AC17C0440401061507C002FF00B5AC170044C2ACB70045C2ACD7003CFFF8C2ACD7001EFFF6C2ACD70028FFF6C2ACD70032FFF6CC071094CAA02700C2A2D700FFF6CC071080CC0710C0BE07101AAC17C05304001507C01F12AC17C0530401071507C002FF00B5AC170053CAACBE0054DEE09700250E0012AC17C04B0401071507C002FF00B5AC17004BCAACBE004CDEE09700250E00CC0FC0023078BAA02F6C0E04DDF09700DAA2D7C0FFF612D207CC05065052455353425554546F4E`,
    signature:
      `3046022100F22BFC59C05ED08D2E93D8D031A2DBD32F15FC21D6DDBF101B76EB8B387AC54D02210086BBF589ABF6AA5F6227C280A46F9A2C35755AD4D39213F608472E1D0538B799`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signEIP1559ERC20Transaction: {
    script: `03040601C707000000003C11ACC7CC4617045D1507C002FF00CC071002A0070012AC17C0460401061507C002FF00B5AC170046C2ACB70047C2ACD7003EFFF8C2A5D700FFF6C2ACD7002AFFF6C2ACD70034FFF6CC071094CAAC2700AECC07C01380B844a9059cbb000000000000000000000000CAA02700CC07200000000000000000000000000000000000000000CAA2C7000CCC0710C0BE07101AAC17C05504001507C01F12AC17C0550401071507C002FF00B5AC170055CAACBE0056DEE09700250E0012AC17C04D0401071507C002FF00B5AC17004DCAACBE004EDEE09700250E0011ACC7CCA51D04C21507C004CC0F104012AC17C0A60401071507C002FF00B5AC1700A6CAACBF00A7DEF09700250F00CC0FC0023078BAA02F6C0E04DDF0970012AC17C0A50400141507C002FF00B5AC1700A5DAA2C7B00CD207CC05065052455353425554546F4E`,
    signature:
      `3044022013322FCE155725E45E0F05E729AD7738FD3C02E8B6FD19979271336C8DACBA4202200E55E9AAD383E50F0AB4FC69246C193CB39DF90C0C81928D67E966035673AA0B`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signEIP1559SmartContractTransaction: {
    script: `03040601C707000000003C11ACC7CC4417045B1507C002FF00CC071002A0070012AC17C0440401061507C002FF00B5AC170044C2ACB70045C2ACD7003CFFF8C2ACD7001EFFF6C2ACD70028FFF6C2ACD70032FFF6CC071094CAA02700C2A2D700FFF6C2AC9700A3CC0710C0BE07101AAC17C05304001507C01F12AC17C0530401071507C002FF00B5AC170053CAACBE0054DEE09700250E0012AC17C04B0401071507C002FF00B5AC17004BCAACBE004CDEE09700250E00D207C005534D415254D207CC05065052455353425554546F4E`,
    signature:
      `304502201E374F271D594996626AD958CC38EF9F294AB43216AC2F50F92A35F94349ED70022100BF0AF56BDAFF13D95647069BECF1B34A5EEED9200DD17255CFF69DEACA32CC5B`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
  signEIP1559SmartContractSegmentTransaction: {
    script: `03050601C707000000003C11ACC7CC4817045F1507C002FF00CC071002A0070012AC17C0480401061507C002FF00B5AC170048C2ACB70049C2ACD7003CFFF8C2ACD7001EFFF6C2ACD70028FFF6C2ACD70032FFF6CC071094CAA02700C2A2D700FFF6C4ACC7004404CC0710C0BE07101AAC17C05704001507C01F12AC17C0570401071507C002FF00B5AC170057CAACBE0058DEE09700250E0012AC17C04F0401071507C002FF00B5AC17004FCAACBE0050DEE09700250E00D207C005534D415254D207CC05065052455353425554546F4E`,
    signature:
      `304502203AA1464B065974B32154ED243C1300E826EBE28EDDA64548858EB5A1F9D3D2460221008DB6C7AAFD98909E296DC08175C324E85F2B6C818E8A3E6DF830FB0419766B93`.padStart(
        144,
        '0'
      ),
    get scriptWithSignature(): string {
      return this.script + this.signature;
    },
  },
};

export { SCRIPTS };
