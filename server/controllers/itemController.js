const Item = require('../models/Item');
const useParams = require('react-router-dom');

const createItem = async (req, res) => {
    try {
        console.log(req.body)
      const { name, price, category, description } = req.body;
      const item = new Item({ name, price, category, description });
      await item.save();
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create item' });
    }
  };

const getItems = async (req, res) => {
    try {
      const items = await Item.find();
      const itemsList = items.map((item) => {
        return {
          name: item.name,
          id: item._id,
        //   creator_id: item.creator_id,
          price: item.price,
          category: item.category,
          description: item.description
        };
      });
      res.json(itemsList);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  };

const deleteItem = async (req, res) => {
    try {
        const id = req.params.id.toString();
        const item = await Item.findOneAndDelete({ _id: id });
        res.json(`Item ${item.name} with ID ${item._id} deleted successfully!`)
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ error: 'Failed to delete item' });
    }
}

module.exports = {
  createItem, getItems, deleteItem
};
