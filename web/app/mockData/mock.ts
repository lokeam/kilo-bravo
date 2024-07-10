
type Book = {
  alt: string;
  author: string;
  img: string;
  title: string;
  genre: string;
  isbn: number;
  pages: number;
  isPhysical: boolean;
  isEbook: boolean;
  isAudio: boolean;
  notes: string;
  location: string;
  language: string;
}

export const allData:Book[] = [
    {
      alt: 'test alt text7',
      author: 'Agatha Christie',
      img: 'https://images.unsplash.com/photo-1719757168062-3ceb06988532?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'Murder on the Orient Express',
      genre: 'Mystery',
      isbn: 5678901234567,
      pages: 288,
      isPhysical: true,
      isEbook: true,
      isAudio: false,
      notes: 'Classic mystery with an unexpected twist.',
      location: 'Shelf F, Row 3',
      language: 'English'
    },
    {
      alt: 'test alt text22',
      author: 'Arthur Conan Doyle',
      img: 'https://images.unsplash.com/photo-1719518384441-d12311be54c6?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D',
      title: 'The Adventures of Sherlock Holmes',
      genre: 'Mystery',
      isbn: 9781508475317,
      pages: 307,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A collection of Sherlock Holmes stories.',
      location: 'Shelf M, Row 2',
      language: 'French'
    },
    {
      alt: 'test alt text23',
      author: 'Charlotte Bronte',
      img: 'https://images.unsplash.com/photo-1551442150-ba8a17b9343e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'Jane Eyre',
      genre: 'Romance',
      isbn: 9780141441146,
      pages: 507,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the life of Jane Eyre.',
      location: 'Shelf R, Row 1',
      language: 'Spanish'
    },
    {
      alt: 'test alt text12',
      author: 'George Orwell',
      img: 'https://images.unsplash.com/photo-1719370281932-299f40a5d8ee?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: '1984',
      genre: 'Dystopian',
      isbn: 9780451524935,
      pages: 328,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A classic dystopian novel.',
      location: 'Shelf A, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text14',
      author: 'Harper Lee',
      img: 'https://images.unsplash.com/photo-1720068910287-a95ae4ee4564?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: 'To Kill a Mockingbird',
      genre: 'Classic',
      isbn: 9780060935467,
      pages: 336,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A Pulitzer Prize-winning novel.',
      location: 'Shelf C, Row 4',
      language: 'English'
    },
    {
      alt: 'test alt text24',
      author: 'Herman Melville',
      img: 'https://images.unsplash.com/photo-1605126068617-2c7aba682230?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      title: 'Moby Dick',
      genre: 'Adventure',
      isbn: 9780142437247,
      pages: 720,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the voyage of the whaling ship Pequod.',
      location: 'Shelf I, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text3',
      author: 'Jack Carr',
      img: 'https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Terminal List',
      genre: 'Thriller',
      isbn: 1234567890123,
      pages: 432,
      isPhysical: true,
      isEbook: true,
      isAudio: false,
      notes: 'An exciting thriller with intense action sequences.',
      location: 'Shelf A, Row 3',
      language: 'German'
    },
    {
      alt: 'test alt text15',
      author: 'Ian Fleming',
      img: 'https://images.unsplash.com/photo-1584662740769-00475d7b5556?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'From Russia With Love',
      genre: 'Spy Fiction',
      isbn: 1928374650912,
      pages: 344,
      isPhysical: true,
      isEbook: false,
      isAudio: false,
      notes: 'Classic Bond novel with iconic characters.',
      location: 'Shelf C, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text11',
      author: 'J.K. Rowling',
      img: 'https://images.unsplash.com/photo-1719844841024-3c7166816fc7?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: 'Harry Potter and the Sorcerer\'s Stone',
      genre: 'Fantasy',
      isbn: 9780590353427,
      pages: 309,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'The first book in the Harry Potter series.',
      location: 'Shelf B, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text25',
      author: 'J.D. Salinger',
      img: 'https://images.unsplash.com/photo-1561394818-699dc5ac3e9e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'The Catcher in the Rye',
      genre: 'Classic',
      isbn: 9780316769488,
      pages: 214,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the experiences of Holden Caulfield.',
      location: 'Shelf Q, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text20',
      author: 'Jane Austen',
      img: 'https://images.unsplash.com/photo-1631607654409-b2163cf483c6?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      title: 'Pride and Prejudice',
      genre: 'Romance',
      isbn: 9780141040349,
      pages: 279,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A classic romantic novel.',
      location: 'Shelf E, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text21',
      author: 'Lewis Carroll',
      img: 'https://images.unsplash.com/photo-1719955151482-e05a8a4e5b51?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D',
      title: 'Alice\'s Adventures in Wonderland',
      genre: 'Fantasy',
      isbn: 9781503222688,
      pages: 201,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the adventures of Alice in Wonderland.',
      location: 'Shelf N, Row 3',
      language: 'English'
    },
    {
      alt: 'test alt text6',
      author: 'David Morrel',
      img: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Rambo',
      genre: 'Action',
      isbn: 8901234567890,
      pages: 380,
      isPhysical: true,
      isEbook: false,
      isAudio: true,
      notes: 'Action-packed story of survival and revenge.',
      location: 'Shelf E, Row 1',
      language: 'Spanish'
    },
    {
      alt: 'test alt text17',
      author: 'Ernest Hemingway',
      img: 'https://images.unsplash.com/photo-1716310014443-344c14135185?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      title: 'The Old Man and the Sea',
      genre: 'Classic',
      isbn: 9780684801223,
      pages: 127,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about an old fisherman.',
      location: 'Shelf H, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text26',
      author: 'Frederick Forsyth',
      img: 'https://images.unsplash.com/photo-1506499422601-ecc792cf898e?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Dogs of War',
      genre: 'Thriller',
      isbn: 6543210987654,
      pages: 400,
      isPhysical: true,
      isEbook: false,
      isAudio: true,
      notes: 'A thrilling tale of mercenaries and war.',
      location: 'Shelf G, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text18',
      author: 'Gabriel Garcia Marquez',
      img: 'https://images.unsplash.com/photo-1622371989772-a40f97e87c02?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'One Hundred Years of Solitude',
      genre: 'Magical Realism',
      isbn: 9780060883287,
      pages: 417,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the Buendia family.',
      location: 'Shelf P, Row 4',
      language: 'French'
    },
    {
      alt: 'test alt text27',
      author: 'Franz Kafka',
      img: 'https://images.unsplash.com/photo-1620052569626-dcbc8ee3a269?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'The Metamorphosis',
      genre: 'Classic',
      isbn: 9780486290300,
      pages: 201,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about a man who turns into a giant insect.',
      location: 'Shelf T, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text28',
      author: 'George Orwell',
      img: 'https://images.unsplash.com/photo-1719370281932-299f40a5d8ee?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: '1984',
      genre: 'Dystopian',
      isbn: 9780451524935,
      pages: 328,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A classic dystopian novel.',
      location: 'Shelf A, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text5',
      author: 'Nelson DeMille',
      img: 'https://images.unsplash.com/photo-1498791386450-a4586cd77055?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cathedral',
      genre: 'Mystery',
      isbn: 5647382901123,
      pages: 456,
      isPhysical: true,
      isEbook: true,
      isAudio: false,
      notes: 'A captivating mystery set in a cathedral.',
      location: 'Shelf D, Row 4',
      language: 'English'
    },
    {
      alt: 'test alt text29',
      author: 'Gabriel Garcia Marquez',
      img: 'https://images.unsplash.com/photo-1622371989772-a40f97e87c02?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'One Hundred Years of Solitude',
      genre: 'Magical Realism',
      isbn: 9780060883287,
      pages: 417,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the Buendia family.',
      location: 'Shelf P, Row 4',
      language: 'English'
    },
    {
      alt: 'test alt text8',
      author: 'Frederick Forsyth',
      img: 'https://images.unsplash.com/photo-1506499422601-ecc792cf898e?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Dogs of War',
      genre: 'Thriller',
      isbn: 6543210987654,
      pages: 400,
      isPhysical: true,
      isEbook: false,
      isAudio: true,
      notes: 'A thrilling tale of mercenaries and war.',
      location: 'Shelf G, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text30',
      author: 'H.G. Wells',
      img: 'https://images.unsplash.com/photo-1719757168062-3ceb06988532?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'The War of the Worlds',
      genre: 'Science Fiction',
      isbn: 9780553213382,
      pages: 192,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about an alien invasion.',
      location: 'Shelf U, Row 2',
      language: 'German'
    },
    {
      alt: 'test alt text31',
      author: 'Kurt Vonnegut',
      img: 'https://images.unsplash.com/photo-1719518384441-d12311be54c6?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D',
      title: 'Slaughterhouse-Five',
      genre: 'Science Fiction',
      isbn: 9780440180296,
      pages: 275,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A satirical novel about World War II experiences.',
      location: 'Shelf V, Row 3',
      language: 'English'
    },
    {
      alt: 'test alt text32',
      author: 'James Joyce',
      img: 'https://images.unsplash.com/photo-1719955151482-e05a8a4e5b51?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D',
      title: 'Ulysses',
      genre: 'Modernist',
      isbn: 9780199535675,
      pages: 730,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A landmark work in modernist literature.',
      location: 'Shelf W, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text33',
      author: 'John Steinbeck',
      img: 'https://images.unsplash.com/photo-1719922328100-2db3dcf21648?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'The Grapes of Wrath',
      genre: 'Historical Fiction',
      isbn: 9780143039433,
      pages: 464,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the Great Depression and Dust Bowl migration.',
      location: 'Shelf X, Row 4',
      language: 'French'
    },
    {
      alt: 'test alt text34',
      author: 'J.D. Salinger',
      img: 'https://images.unsplash.com/photo-1622371989772-a40f97e87c02?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'Franny and Zooey',
      genre: 'Literary Fiction',
      isbn: 9780316769495,
      pages: 201,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the Glass family.',
      location: 'Shelf Y, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text35',
      author: 'Joseph Heller',
      img: 'https://images.unsplash.com/photo-1561394818-699dc5ac3e9e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'Catch-22',
      genre: 'Satire',
      isbn: 9781451626650,
      pages: 453,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A satirical novel about World War II.',
      location: 'Shelf Z, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text36',
      author: 'Margaret Atwood',
      img: 'https://images.unsplash.com/photo-1551442150-ba8a17b9343e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'The Handmaid\'s Tale',
      genre: 'Dystopian',
      isbn: 9780385490818,
      pages: 311,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about a dystopian future.',
      location: 'Shelf AA, Row 3',
      language: 'English'
    },
    {
      alt: 'test alt text37',
      author: 'Toni Morrison',
      img: 'https://images.unsplash.com/photo-1519123439617-f3693cc27f4d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'Beloved',
      genre: 'Historical Fiction',
      isbn: 9781400033416,
      pages: 324,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the aftermath of slavery.',
      location: 'Shelf AB, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text38',
      author: 'Fyodor Dostoevsky',
      img: 'https://images.unsplash.com/photo-1620052569626-dcbc8ee3a269?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'Crime and Punishment',
      genre: 'Psychological Fiction',
      isbn: 9780140449136,
      pages: 671,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about a man\'s moral dilemmas after committing a crime.',
      location: 'Shelf AC, Row 4',
      language: 'Russian'
    },
    {
      alt: 'test alt text39',
      author: 'Homer',
      img: 'https://images.unsplash.com/photo-1719757168062-3ceb06988532?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'The Odyssey',
      genre: 'Epic Poetry',
      isbn: 9780140268867,
      pages: 541,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'An epic poem about Odysseus\' journey home.',
      location: 'Shelf AD, Row 3',
      language: 'Greek'
    },
    {
      alt: 'test alt text40',
      author: 'James Baldwin',
      img: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww',
      title: 'Go Tell It on the Mountain',
      genre: 'Literary Fiction',
      isbn: 9780375701870,
      pages: 226,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about a young African American\'s religious experiences.',
      location: 'Shelf AE, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text41',
      author: 'Emily Bronte',
      img: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG11c2ljfGVufDB8fDB8fHww',
      title: 'Wuthering Heights',
      genre: 'Gothic Fiction',
      isbn: 9780141439556,
      pages: 342,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the passionate and destructive love between Heathcliff and Catherine.',
      location: 'Shelf AF, Row 3',
      language: 'English'
    },
    {
      alt: 'test alt text42',
      author: 'William Faulkner',
      img: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG11c2ljfGVufDB8fDB8fHww',
      title: 'The Sound and the Fury',
      genre: 'Modernist',
      isbn: 9780679732242,
      pages: 326,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel that portrays the decline of the Compson family.',
      location: 'Shelf AG, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text43',
      author: 'Haruki Murakami',
      img: 'https://images.unsplash.com/photo-1589833870588-8a0902bcf55b?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc5fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Kafka on the Shore',
      genre: 'Magical Realism',
      isbn: 9781400079278,
      pages: 505,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about two distinct yet interrelated plots.',
      location: 'Shelf AH, Row 1',
      language: 'Japanese'
    },
    {
      alt: 'test alt text44',
      author: 'Vladimir Nabokov',
      img: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'Lolita',
      genre: 'Literary Fiction',
      isbn: 9780679723165,
      pages: 317,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A controversial novel about an older man\'s obsession with a young girl.',
      location: 'Shelf AI, Row 3',
      language: 'English'
    },
    {
      alt: 'test alt text45',
      author: 'J.R.R. Tolkien',
      img: 'https://images.unsplash.com/photo-1519139116361-2ea84d04a4aa?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTE4fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'The Hobbit',
      genre: 'Fantasy',
      isbn: 9780345339683,
      pages: 310,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A fantasy novel about Bilbo Baggins\' adventure.',
      location: 'Shelf AJ, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text46',
      author: 'F. Scott Fitzgerald',
      img: 'https://images.unsplash.com/photo-1530014671970-707f86eb10f5?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM5fHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D',
      title: 'The Great Gatsby',
      genre: 'Classic',
      isbn: 9780743273565,
      pages: 180,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the American dream and social stratification.',
      location: 'Shelf AK, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text47',
      author: 'Aldous Huxley',
      img: 'https://images.unsplash.com/photo-1719530910202-9f791d646ee6?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDczfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      title: 'Brave New World',
      genre: 'Dystopian',
      isbn: 9780060850524,
      pages: 268,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about a dystopian future.',
      location: 'Shelf K, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text48',
      author: 'Mary Shelley',
      img: 'https://images.unsplash.com/photo-1719597528858-71b82a7a90e7?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      title: 'Frankenstein',
      genre: 'Horror',
      isbn: 9780486282114,
      pages: 280,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the creation of a monster.',
      location: 'Shelf L, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text49',
      author: 'Leo Tolstoy',
      img: 'https://images.unsplash.com/photo-1719922328100-2db3dcf21648?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'War and Peace',
      genre: 'Historical',
      isbn: 9780199232765,
      pages: 1392,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the French invasion of Russia.',
      location: 'Shelf O, Row 1',
      language: 'Russian'
    },
    {
      alt: 'test alt text50',
      author: 'Gabriel Garcia Marquez',
      img: 'https://images.unsplash.com/photo-1622371989772-a40f97e87c02?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'Love in the Time of Cholera',
      genre: 'Romance',
      isbn: 9780307389732,
      pages: 368,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about a love that spans decades.',
      location: 'Shelf P, Row 2',
      language: 'Spanish'
    },
    {
      alt: 'test alt text51',
      author: 'Ray Bradbury',
      img: 'https://images.unsplash.com/photo-1626794896302-c37d515dbeb2?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      title: 'Fahrenheit 451',
      genre: 'Dystopian',
      isbn: 9781451673319,
      pages: 256,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about a future where books are banned and burned.',
      location: 'Shelf Q, Row 3',
      language: 'English'
    },
    {
      alt: 'test alt text52',
      author: 'William Shakespeare',
      img: 'https://images.unsplash.com/photo-1716310014443-344c14135185?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D',
      title: 'Hamlet',
      genre: 'Tragedy',
      isbn: 9780743477123,
      pages: 342,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A tragic play about Prince Hamlet of Denmark.',
      location: 'Shelf R, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text53',
      author: 'Mark Twain',
      img: 'https://images.unsplash.com/photo-1719757168062-3ceb06988532?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'The Adventures of Huckleberry Finn',
      genre: 'Adventure',
      isbn: 9780486280615,
      pages: 366,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the adventures of a young boy on the Mississippi River.',
      location: 'Shelf S, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text54',
      author: 'George Orwell',
      img: 'https://images.unsplash.com/photo-1719370281932-299f40a5d8ee?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: 'Animal Farm',
      genre: 'Political Satire',
      isbn: 9780451526342,
      pages: 141,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A satirical allegory about the Russian Revolution.',
      location: 'Shelf T, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text55',
      author: 'J.K. Rowling',
      img: 'https://images.unsplash.com/photo-1719844841024-3c7166816fc7?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: 'Harry Potter and the Chamber of Secrets',
      genre: 'Fantasy',
      isbn: 9780439064873,
      pages: 341,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'The second book in the Harry Potter series.',
      location: 'Shelf U, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text56',
      author: 'Ernest Hemingway',
      img: 'https://images.unsplash.com/photo-1719518384441-d12311be54c6?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D',
      title: 'For Whom the Bell Tolls',
      genre: 'War',
      isbn: 9780684803357,
      pages: 471,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the Spanish Civil War.',
      location: 'Shelf V, Row 3',
      language: 'English'
    },
    {
      alt: 'test alt text57',
      author: 'Virginia Woolf',
      img: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG11c2ljfGVufDB8fDB8fHww',
      title: 'Mrs Dalloway',
      genre: 'Modernist',
      isbn: 9780156628709,
      pages: 216,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel that explores a day in the life of Clarissa Dalloway.',
      location: 'Shelf W, Row 1',
      language: 'English'
    },
    {
      alt: 'test alt text58',
      author: 'Herman Melville',
      img: 'https://images.unsplash.com/photo-1561394818-699dc5ac3e9e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGlVSXNuVnRqQjBZfHxlbnwwfHx8fHw%3D',
      title: 'Moby-Dick',
      genre: 'Adventure',
      isbn: 9780142437247,
      pages: 635,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the voyage of the whaling ship Pequod.',
      location: 'Shelf X, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text59',
      author: 'Jane Austen',
      img: 'https://images.unsplash.com/photo-1719518384441-d12311be54c6?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D',
      title: 'Sense and Sensibility',
      genre: 'Romance',
      isbn: 9780141439662,
      pages: 409,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel about the Dashwood sisters.',
      location: 'Shelf Y, Row 2',
      language: 'English'
    },
    {
      alt: 'test alt text60',
      author: 'Charles Dickens',
      img: 'https://images.unsplash.com/photo-1719370281932-299f40a5d8ee?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
      title: 'A Tale of Two Cities',
      genre: 'Historical Fiction',
      isbn: 9781853262647,
      pages: 448,
      isPhysical: true,
      isEbook: true,
      isAudio: true,
      notes: 'A novel set during the French Revolution.',
      location: 'Shelf Z, Row 1',
      language: 'French'
    }
  ];