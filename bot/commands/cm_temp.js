const temp = {
    roles: ["@everyone"],
    descr: "Mensaje temporal. Elimina el mensaje a los 5 segundos.",
    exec: (message) => {
        message.delete(5000);
    }
}

module.exports = temp;