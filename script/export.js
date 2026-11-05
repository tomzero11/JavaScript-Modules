// !! Untuk mengekspose keluar agar bisa di Akses oleh JavaScript yang lain

export function sayHello(name) {
    console.log(`Hello ${name}`);
}

export const sayGoodBye = (name) => {
    console.log(`GoodBye ${name}`);
}