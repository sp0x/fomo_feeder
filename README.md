# Fomo Feeder

Fomo Feeder is a stock market feed reader and daemon/API that provides real-time stock market data from various sources. It is designed to be used as a backend for stock market applications, trading bots, and other financial applications.

## Features

- Real-time stock market data
- Multiple data sources
- Easy to use API
- Daemon mode
- Customizable data feeds
- Supports multiple data formats


# Quick start

### Migrations

To generate one: 
npx ts-node ./node_modules/typeorm/cli.js migration:generate ./src/migrations/Feed -d ./src/data-source.ts
