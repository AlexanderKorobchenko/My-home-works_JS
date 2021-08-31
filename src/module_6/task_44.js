const getTotalBalanceByGender = (users, gender) => {
    if (gender === 'female') {
        return users
            .filter(user => user.gender === 'female')
            .reduce((acc, user) => { return acc + user.balance }, 0)
    };
    
    if (gender === 'male') {
        return users
            .filter(user => user.gender === 'male')
            .reduce((acc, user) => { return acc + user.balance }, 0)
    };

    return `Gender ${gender} doesn't exist`;
};

// Спрособ 2

const getTotalBalanceByGender = (users, gender) => {
   return users
     .filter(user => user.gender === gender)
     .reduce((total, user) => total + user.balance, 0)
};
