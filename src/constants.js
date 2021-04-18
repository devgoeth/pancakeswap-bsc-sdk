import JSBI from 'jsbi';
export var ChainId;
(function (ChainId) {
    ChainId[ChainId["MAINNET"] = 56] = "MAINNET";
    ChainId[ChainId["BSCTESTNET"] = 97] = "BSCTESTNET";
})(ChainId || (ChainId = {}));
export var TradeType;
(function (TradeType) {
    TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
    TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(TradeType || (TradeType = {}));
export var Rounding;
(function (Rounding) {
    Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
    Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
    Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(Rounding || (Rounding = {}));
export const FACTORY_ADDRESS = '0xBCfCcbde45cE874adCB698cC183deBcF17952812';
export const INIT_CODE_HASH = '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66';
export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000);
// exports for internal consumption
export const ZERO = JSBI.BigInt(0);
export const ONE = JSBI.BigInt(1);
export const TWO = JSBI.BigInt(2);
export const THREE = JSBI.BigInt(3);
export const FIVE = JSBI.BigInt(5);
export const TEN = JSBI.BigInt(10);
export const _100 = JSBI.BigInt(100);
export const _998 = JSBI.BigInt(998);
export const _1000 = JSBI.BigInt(1000);
export var SolidityType;
(function (SolidityType) {
    SolidityType["uint8"] = "uint8";
    SolidityType["uint256"] = "uint256";
})(SolidityType || (SolidityType = {}));
export const SOLIDITY_TYPE_MAXIMA = {
    [SolidityType.uint8]: JSBI.BigInt('0xff'),
    [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
};
//# sourceMappingURL=constants.js.map