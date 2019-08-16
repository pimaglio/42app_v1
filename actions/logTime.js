export function currentDate() {
    const currentDate = {
        month: '',
        day: '',
    };

    let date = new Date().toLocaleDateString('fr-FR').split('/');
    currentDate.month = date[1];
    currentDate.day = date[0];
    return currentDate;
}

export function timeRegex(res) {
    const time = {
        h: 0,
        m: 0,
        s: 0
    };

    let timeLog = res[1].split(':');

    time.h = timeLog[0];
    time.m = timeLog[1];
    time.s = timeLog[2].substr(0, 2);

    return time;
}

export function currentMonth(logtime) {
    let date = currentDate();

    let i = 0;
    let totalDay = 0;
    let sum = 0;

    while (logtime[i]) {
        let res = logtime[i].begin_at.split('-');
        let spe = logtime[i].end_at;
        if (date.month === res[1] && spe !== null) {
            let time = timeRegex(logtime[i].begin_at.split('T'));
            let totalA = parseInt(time.h, 10) * 3600  + parseInt(time.m, 10) * 60 + parseInt(time.s, 10);

            time = timeRegex(logtime[i].end_at.split('T'));
            let totalB = parseInt(time.h, 10) * 3600  + parseInt(time.m, 10) * 60 + parseInt(time.s, 10);

            if (totalB < totalA) {
                totalA -= 86400 ;
                totalDay = totalB - totalA;
            } else {
                totalDay = totalB - totalA;
            }
            sum += totalDay;
        }
        i++;
    }
    sum /= 3600;
    return Math.round(sum);
}

export function currentDay(logtime) {
    let date = currentDate();
    let i = 0;
    let totalDay = 0;
    let sum = 0;

    while (logtime[i]) {
        let resMonth = logtime[i].begin_at.split('-');
        let currentday = logtime[i].begin_at.split('-');
        let regex = /[^T]*/g,
            resDay;
        resDay = regex.exec(currentday[2]);
        let currentday2 = logtime[1].end_at.split('-');
        let regex2 = /[^T]*/g,
            resDay2;
        resDay2 = regex2.exec(currentday2[2]);
        let spe = logtime[i].end_at;

        let dayM = date.day - 1;
        if (date.day === resDay[0] && date.month === resMonth[1] && spe !== null) {
            let time = timeRegex(logtime[i].begin_at.split('T'));
            let totalA = parseInt(time.h, 10) * 3600  + parseInt(time.m, 10) * 60 + parseInt(time.s, 10);

            time = timeRegex(logtime[i].end_at.split('T'));
            let totalB = parseInt(time.h, 10) * 3600  + parseInt(time.m, 10) * 60 + parseInt(time.s, 10);

            if (totalB < totalA) {
                totalA -= 86400 ;
                totalDay = totalB - totalA;
            } else {
                totalDay = totalB - totalA;
            }
            sum += totalDay;
        }
        if (date.day === resDay[0] && date.month === resMonth[1] && spe === null){
            var d = new Date();

            let hc = d.getHours();
            let mc = d.getMinutes();
            let sc = d.getSeconds();

            let time = timeRegex(logtime[i].begin_at.split('T'));
            let totalA = parseInt(time.h, 10) * 3600  + parseInt(time.m, 10) * 60 + parseInt(time.s, 10);

            hc *= 3600;
            mc *= 60;
            let totalB = hc + mc+ sc;
            totalDay =  totalB - totalA;
            sum += totalDay;
        }
        if (date.day === resDay2[0] && dayM.toString() === resDay[0] && date.month === resMonth[1]) {
            time = timeRegex(logtime[i].end_at.split('T'));
            let totalDay = parseInt(time.h, 10) * 3600  + parseInt(time.m, 10) * 60 + parseInt(time.s, 10);
            sum += totalDay;
        }
        i++;
    }
    sum /= 3600;
    return Math.round(sum);
}