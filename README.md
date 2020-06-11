# moneyforward2csv

A script to convert data taken from MoneyForward to a CSV.

## Usage

```
npm start --target ./data/your_data.js
```

## How to get MoneyForward data

- Open an account detail page
- Press `all` button in time-series chart
- Record `https://moneyforward.com/update_chart/all?...` response in network tab in devtool
- Put the JS file in `./data`