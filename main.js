'use strict'

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => document.getElementById('modal').classList.remove('active')

const tempClient = {
    nome: 'Gilberto',
    email: 'gil@gmail.com',
    celular: '71123456789',
    cidade: 'Salvador'
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient));

// CRUD - create read update delete

// CRUD - DELETE
const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index, 1);
    setLocalStorage(dbClient);
}

// CRUD - UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);
}

// CRUD - READ
const readClient = () => getLocalStorage()

// CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

// Interação com o layout
const saveClient = () => {
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').valur
        }
        createClient(client)
        console.log('Cadastrando cliente');
    }
}

// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('salvar').addEventListener('click', saveClient)