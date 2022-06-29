export const convertMoney = (money: any) => {
    return parseFloat(money).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }