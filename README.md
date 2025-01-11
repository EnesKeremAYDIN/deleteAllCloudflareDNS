# Delete All Cloudflare DNS Records

A Node.js tool to delete all DNS records for a specified domain on Cloudflare, simplifying DNS management tasks and enabling batch deletions.

## Features

- Deletes all DNS records associated with a specified Cloudflare domain.
- Uses Cloudflare's API to authenticate and perform batch deletions.

## Installation and Setup

### Prerequisites

- **Node.js** installed on your machine.
- A **Cloudflare API Token** with permissions to manage DNS records.

### Installation

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/EnesKeremAYDIN/deleteAllCloudflareDNS.git
   cd deleteAllCloudflareDNS
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Configuration

1. Open **`app.js`** and configure your **Cloudflare API Token** and **Zone ID** (the unique identifier for your domain on Cloudflare).

### Running the Script

Execute the script to delete all DNS records:
```bash
node app.js
```

## Files

- **`app.js`**: Main script that interacts with the Cloudflare API to delete DNS records.
- **`package.json`**: Lists project dependencies and metadata.

## Disclaimer

This script will delete all DNS records in the specified Cloudflare zone. Ensure you have backups or confirmations before proceeding, as deletions are irreversible.
