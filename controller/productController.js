const express = require('express');
const axios = require('axios');
const app = express();

const url = 'https://dummyjson.com/products'

exports.getProductList = async (req,res) => {
    try{
        const productResult = await axios.get(url);
        const {products} = productResult.data
        let returnProductResult = [];
        products.forEach(product => {
            returnProductResult.push({
                Id: product.id,
                Title: product.title,
                ThumbnailLink: product.thumbnail
            })
        });
        res.json(returnProductResult);
    } catch(error){
        console.error(error);
        res.status(500).json({msg:"server error"});
    } 
}