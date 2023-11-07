import { Request, Response, NextFunction } from 'express';
import Books from '../model/book.model';

/**
 *
 * Define all handeler Mathod here
 */

function GetBook(req: Request, res: Response, next: NextFunction) {
  res.status(200).jsonp({
    message: 'Get Books',
  });
}

class Book {

  public static getBook(req: Request, res: Response, next: NextFunction) {
    res.status(200).jsonp({
      message: 'Get message from Book Class',
    });
  }

  public static async saveBook(req: Request, res: Response, next: NextFunction) {
    try {
      const newBook = new Books({
        bookName: req.body.title,
        author: req.body.author,
        bookId:10,
        publish:2019
      })
      await newBook.save();
      return res.status(201).send('Successfully created a book');
    } catch (error) {
      console.log("Error",error)
    }
  }
}


export {GetBook};
export default Book;
