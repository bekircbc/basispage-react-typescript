import { IBook } from './interfaces';

export const getBooks = (rawBooks: any[]) => {
	const books: IBook[] = [];
	rawBooks.forEach((rawBook: any) => {
		const book: IBook = {
			title: rawBook.title,
			author:
				rawBook.authors.length > 0
					? rawBook.authors[0].name
					: '(unknown)',
		};
		books.push(book);
	});

	return books;
};
