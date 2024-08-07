import fetch from 'node-fetch';

const zoneid = '';
const bearer = '';
const apiUrl = `https://api.cloudflare.com/client/v4/zones/${zoneid}/dns_records?per_page=50000`;

const headers = {
    'Authorization': `Bearer ${bearer}`,
    'Content-Type': 'application/json'
  };
  fetch(apiUrl, { headers })
    .then(response => response.json())
    .then(data => {
      const dnsRecordIds = data.result.map(record => record.id);
      return dnsRecordIds;
    })
    .then(dnsRecordIds => {
      dnsRecordIds.forEach(id => {
        const deleteUrl = `https://api.cloudflare.com/client/v4/zones/${zoneid}/dns_records/${id}`;
        fetch(deleteUrl, {
          method: 'DELETE',
          headers
        })
          .then(response => {
            if (response.ok) {
              console.log(`Successfully deleted DNS record with ID: ${id}`);
            } else {
              console.log(`Failed to delete DNS record with ID: ${id}`);
            }
          })
          .catch(error => {
            console.error(`Error deleting DNS record with ID: ${id}`, error);
          });
      });
    })
    .catch(error => {
      console.error('Error fetching DNS records:', error);
    });
