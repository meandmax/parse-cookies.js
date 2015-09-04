import test from 'tape';
import parseCookies from '../index';

test('parseCookies() is a function and returns an object', function (t) {
    t.plan(2);

    t.equal(typeof parseCookies, 'function');
    t.equal(typeof parseCookies('a=1;b=2;c=3'), 'object');
});

test('parseCookies() returns reasonable data', function (t) {
    let cookies = parseCookies('a=1;b=2;c=3');

    t.plan(3);

    t.equal(cookies.a, '1');
    t.equal(cookies.b, '2');
    t.equal(cookies.c, '3');
});

test('parseCookies() returns the last occurence of a key', function (t) {
    let cookies = parseCookies('a=1;b=2;a=3');

    t.plan(2);

    t.equal(cookies.a, '3');
    t.equal(cookies.b, '2');
});

test('parseCookies() transforms data using dataParser', function (t) {
    let cookies = parseCookies('a=x;b=y', function (x) {
        return '<' + x + '>';
    });

    t.plan(2);

    t.equal(cookies.a, '<x>');
    t.equal(cookies.b, '<y>');
});

test('parseCookies() transforms data using another dataParser', function (t) {
    let cookies = parseCookies('a=1;b=2', function (x) {
        return parseInt(x, 10);
    });

    t.plan(3);

    t.equal(cookies.a, 1);
    t.equal(cookies.b, 2);
    t.notEqual(cookies.a, '1');
});
