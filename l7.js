// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі;
//
// function wokeUp (action) {
//     return  new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             if (!action) {
//                 console.log('блін будильник не спрацював');
//                 reject('7:30');
//             }else {
//                 console.log('Ехх пора вставати');
//                 resolve('7:00');
//             }
//         },2000)
//     })}
//
// function shower () {
//         return new Promise((resolve, reject) => {
//             setTimeout( () => {
//                 console.log('Знову теплу воду відключили((');
//                 resolve('7:15')
//             }, 1000);
//         });
// }
//
// function breakfast() {
//     return new Promise( resolve => {
//         setTimeout( () => {
//             console.log('Мммм.... Мівіна =)');
//             resolve('7:30');
//         }, 3000);
//     });
// }
//
// function goToWork() {
//     return new Promise( resolve => {
//         setTimeout( () => {
//             console.log('Ну і де та маршрутка .........');
//             resolve('8:00');
//         }, 2500);
//     });
// }
//
// function lunch() {
//     return new Promise( resolve => {
//         setTimeout( () => {
//             console.log('сендвіч мммм...');
//             resolve('12:00')
//         }, 1555);
//     });
// }
//
// function goToHome() {
//     return new Promise( resolve => {
//        setTimeout( () => {
//            console.log('А я іду такая вся в дольче габанна =)');
//            resolve('18:00');
//        }, 3333); 
//     });
// }
// function gym() {
//     return new Promise( resolve => {
//        setTimeout( () => {
//            console.log('Спорт то життя!!');
//            resolve('18:30');
//        },2222) 
//     });
// }
// function dinner() {
//     return new Promise( resolve => {
//        setTimeout( () => {
//            console.log('ом-ном-ном');
//            resolve('19:30');
//        }, 1111); 
//     });
// }
// function lesson() {
//     return new Promise( resolve => {
//        setTimeout( () => {
//            console.log('Опа-ча мої любимі проміси');
//            resolve('20:00');
//        }, 999);
//     });
// }
// function timeWithDaughter() {
//     return new Promise( resolve => {
//         setTimeout( () => {
//             console.log('знову ті смішаріки');
//             resolve('21:20');
//         }, 5555);
//     });
// }
// function goToSleep() {
//     return new Promise( resolve => {
//         setTimeout( () => {
//             console.log('ну все можна і поспати');
//             resolve('23:00');
//         }, 4444);
//     });
// }
//
// wokeUp('вств')
//     .then(value => {
//         console.log(value);
//         return shower();
//     })
//     .then(value => {
//         console.log(value);
//         return breakfast();
//     })
//     .then(value => {
//         console.log(value);
//         return goToWork();
//     })
//     .then(value => {
//         console.log(value);
//         return lunch();
//     })
//     .then(value => {
//         console.log(value);
//         return goToHome();
//     })
//     .then(value => {
//         console.log(value);
//         return gym();
//     })
//     .then(value => {
//         console.log(value);
//         return dinner();
//     })
//     .then(value => {
//         console.log(value);
//         return lesson();
//     })
//     .then(value => {
//         console.log(value);
//         return timeWithDaughter();
//     })
//     .then(value => {
//         console.log(value);
//         return goToSleep();
//     })
//     .catch(reason => console.log(reason))

function wokeUp (action) {
    return  new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (!action) {
                console.log('блін будильник не спрацював');
                reject('7:30');
            }else {
                console.log('Ехх пора вставати');
                resolve('7:00');
            }
        },2000)
    })}

function shower () {
    return new Promise(resolve => {
        setTimeout( () => {
            console.log('Знову теплу воду відключили((');
            resolve('7:15')
        }, 1000);
    });
}

function breakfast() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Мммм.... Мівіна =)');
            resolve('7:30');
        }, 3000);
    });
}

function goToWork() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Ну і де та маршрутка .........');
            resolve('8:00');
        }, 2500);
    });
}

function lunch() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('сендвіч мммм...');
            resolve('12:00')
        }, 1555);
    });
}

function goToHome() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('А я іду такая вся в дольче габанна =)');
            resolve('18:00');
        }, 3333);
    });
}
function gym() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Спорт то життя!!');
            resolve('18:30');
        },2222)
    });
}
function dinner() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('ом-ном-ном');
            resolve('19:30');
        }, 1111);
    });
}
function lesson() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Опа-ча мої любимі проміси');
            resolve('20:00');
        }, 999);
    });
}
function timeWithDaughter() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('знову ті смішаріки');
            resolve('21:20');
        }, 5555);
    });
}
function goToSleep() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('ну все можна і поспати');
            resolve('23:00');
        }, 4444);
    });
}

async function myDay() {
    try {
        const up = await wokeUp('');
        console.log(up);
        const showerr = await shower();
        console.log(showerr);
        const eat = await breakfast();
        console.log(eat);
        const work = await goToWork();
        console.log(work);
        const myLunch = await lunch();
        console.log(myLunch);
        const home = await goToHome();
        console.log(home);
        const gymm = await gym();
        console.log(gymm);
        const dinnerr = await dinner();
        console.log(dinnerr);
        const daughter = await timeWithDaughter();
        console.log(daughter);
        const sleep = await goToSleep();
        console.log(sleep);
    }catch (e) {
        console.log(e)
    }
}

myDay();