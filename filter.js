    function filtermoney(s, n) {
        const isNum = Number(s);
        if (isNaN(isNum)) {
            return s;
        }

        if (isNum === 0) {
            s = '0';
        }

        if (s == null || s == '') return '';
        const oldS = s;
        if (s < 0) {
            s = 0 - s;
        }

        n = n >= 0 && n <= 20 ? n : 2;
        s = `${parseFloat((`${s}`).replace(/[^\d\.-]/g, '')).toFixed(n)}`;
        let l = s.split('.')[0].split('').reverse(),
            r = s.split('.')[1];
        let t = '';
        for (let i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
        }
        if (oldS < 0) {
            return `-${t.split('').reverse().join('')}.${r}`;
        }
        let sss = `${t.split('').reverse().join('')}.${r}`;
        console.log(sss)
        return sss;
    }

    filtermoney(0.058)
