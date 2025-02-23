interface TokenProps {
  name: string;
  symbol: string;
  unit: string;
  contractAddress: string;
  signature: string;
}

abstract class ChainProps {
  abstract readonly id: number;
  abstract readonly symbol: string;
  readonly layer2: string = '';
  abstract readonly signature: string;
  abstract readonly tokens: Record<string, TokenProps>;

  getSignature() {
    return this.signature;
  }

  toHexChainInfo() {
    const chainIdHex = this.getChainId();
    const chainIdLength = this.getHexBufferLength(chainIdHex);
    const symbolHex = this.getSymbol();
    const symbolLength = this.getHexBufferLength(symbolHex);
    const layer2Hex = this.getLayer2();
    const layer2Length = this.getHexBufferLength(layer2Hex);
    return (
      chainIdLength +
      chainIdHex.padEnd(12, '0') +
      symbolLength +
      symbolHex.padEnd(14, '0') +
      layer2Length +
      layer2Hex.padEnd(14, '0')
    );
  }

  private getSymbol() {
    return Buffer.from(this.symbol).toString('hex');
  }

  private getLayer2() {
    return Buffer.from(this.layer2 ?? '').toString('hex');
  }

  private getChainId() {
    const buffer = Buffer.allocUnsafe(6);
    buffer.writeIntBE(this.id, 0, 6);
    // Remove leading zeros.
    return Buffer.from(buffer.filter((b) => b !== 0)).toString('hex');
  }

  private getHexBufferLength(hex: string) {
    return Math.ceil(hex.length / 2)
      .toString(16)
      .padStart(2, '0');
  }
}

export { ChainProps, TokenProps };
