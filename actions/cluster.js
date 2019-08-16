export function nbrUsersZone(res) {
    let count = Object.keys(res).length;
    return count;
}

export function availablePlace(res, zone) {
    if (zone === 1){
        return 74 - nbrUsersZone(res);
    }
    if (zone === 2){
        return 40 - nbrUsersZone(res);
    }
    if (zone === 3){
        return 37 - nbrUsersZone(res);
    }
    if (zone === 4){
        return 44 - nbrUsersZone(res);
    }
}

export function totalUser(z1, z2, z3, z4) {
    let a = Object.keys(z1).length;
    let b = Object.keys(z2).length;
    let c = Object.keys(z3).length;
    let d = Object.keys(z4).length;
    return a+b+c+d;
}