import { useState, useEffect } from 'react';
import ContactForm from './сomponents/ContactForm/ContactForm';
import ContactList from './сomponents/ContactList/ContactList';
import SearchBox from './сomponents/SearchBox/SearchBox';
import { nanoid } from 'nanoid';
import userData from './userData.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : userData;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleAdd = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    const contactToAdd = {
      id: nanoid(),
      ...newContact,
    };

    setContacts((prev) => [...prev, contactToAdd]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAdd} />
      <SearchBox filter={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;