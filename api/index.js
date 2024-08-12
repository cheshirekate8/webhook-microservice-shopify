require('dotenv').config();

const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, clé tile!');
});

// app.post('/webhook', async (req, res) => {
//     const payload = req.body;
//     const { contact_email, propertyName, propertyValue } = payload[0];
//     try {
//         const customerRes = await axios.get(`https://${process.env.SHOP_NAME}.myshopify.com/admin/api/2024-01/customers/search.json?query=email:${contact_email}`, {
//             headers: {
//                 'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
//             }
//         });

//         const customer = customerRes.data.customers[0];

//         if (customer) {
//             const updateRes = await axios.put(`https://${process.env.SHOP_NAME}.myshopify.com/admin/api/2024-01/customers/${customer.id}.json`, {
//                 customer: {
//                     id: customer.id,
//                     [propertyName]: propertyValue
//                 }
//             }, {
//                 headers: {
//                     'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
//                 }
//             });

//             res.status(200).send('Customer updated');
//         } else {
//             res.status(404).send('Customer not found');
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error updating customer');
//     }
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
