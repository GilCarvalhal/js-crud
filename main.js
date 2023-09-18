'use strict'

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => document.getElementById('modal').classList.remove('active')

const tempClient = {
    nome: 'Gil',
    email: 'gil@gmail.com',
    celular: '71123456789',
    cidade: 'Salvador'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient));

// CRUD - create read update delete

// CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
}

// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)
