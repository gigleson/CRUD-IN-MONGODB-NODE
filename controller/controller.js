import { Books } from "../models/booksModels.js";

export const postBook =async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "send all the requirement" })
        };
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Books.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
};

export const getBook = async (req, res) => {
    try {
        const books = await Books.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

export const getById =async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Books.findById(id);
        return res.status(200).json({ book });

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

export  const updateById = async (req, res) => {
    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "send all the requirement" })
        }

        const { id } = req.params;
        const result = await Books.findByIdAndUpdate(id, req.body)

        if (!result) {
            return res.status(404).send({ message: "Book not found" })

        }
        return res.status(404).send({ message: "Book found and updated" })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export  const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Books.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send("rong id")
        }
        return res.status(200).send("suceffully deleted")


    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error.message })

    }

}



