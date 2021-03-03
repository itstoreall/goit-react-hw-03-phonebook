import React, { useState, useEffect } from 'react';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import PropTypes from 'prop-types';
import { wrapper, title, subtitle } from './App.module.scss';

const App = ({ initialValue }) => {
  const [contacts, setContacts] = useState(initialValue);
  const [filter, setFilter] = useState('');

  // Записывает значения инпута в стейт
  const handleInputFilter = e => setFilter(e.target.value);

  // Добавляет новый контакт в стейт
  const handleSubmit = newContact =>
    contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : setContacts(prevState => [newContact, ...prevState]);

  // Фильтрация контактов
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  // Deletes contact
  const handleDeleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  // Получает контакты из localStorage
  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);

  // Добавляет контакты в localStorage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} />
      <h2 className={subtitle}>Contacts</h2>
      <Filter value={filter} onChange={handleInputFilter} />
      <ContactList
        contacts={filteredContacts}
        filter={filter}
        onInputChange={handleInputFilter}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

App.defaultProps = {
  initialValue: [],
};

App.propTypes = {
  initialValue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default App;
