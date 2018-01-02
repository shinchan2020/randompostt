var urlweb = "http://amankan.iblogger.org";
function auto_safelink() {
    auto_safeconvert()
}
function auto_safeconvert() {
    var _0x8741x3 = window['location']['hostname'];
    '' == protected_links || protected_links['match'](_0x8741x3) ? '' == protected_links && (protected_links = _0x8741x3) : protected_links += ', ' + _0x8741x3;
    var _0x8741x4 = '',
        _0x8741x5 = new Array,
        _0x8741x6 = 0;
    _0x8741x4 = document['getElementsByTagName']('a'), a_to_va = _0x8741x4['length'], _0x8741x5 = a_to_fa(), _0x8741x6 = _0x8741x5['length'];
    for (var _0x8741x7 = !1, _0x8741x8 = 0, _0x8741x9 = '', _0x8741xa = 0; a_to_va > _0x8741xa; _0x8741xa++) {
        for (_0x8741x7 = !1, _0x8741x8 = 0; 0 == _0x8741x7 && _0x8741x6 > _0x8741x8;) {
            _0x8741x9 = _0x8741x4[_0x8741xa]['href'], !_0x8741x9['match'](_0x8741x5[_0x8741x8]) && _0x8741x9 && _0x8741x9['match']('http') || (_0x8741x7 = !0), _0x8741x8++
        };
        if (0 == _0x8741x7) {
            var _0x8741xb = Base64['encode'](_0x8741x9);
            _0x8741x4[_0x8741xa]['href'] = urlweb + '/url-nya.php?site=' + _0x8741xb + '&c=0&user=' + User_ID, _0x8741x4[_0x8741xa]['rel'] = 'nofollow', a_to_vb++, a_to_vc += _0x8741xa + ':::' + _0x8741x4[_0x8741xa]['href'] + '\x0A'
        }
    };
    var _0x8741xc = document['getElementById']('anonyminized'),
        _0x8741xd = document['getElementById']('found_links');
    _0x8741xc && (_0x8741xc['innerHTML'] += a_to_vb), _0x8741xd && (_0x8741xd['innerHTML'] += a_to_va)
}
function a_to_fa() {
    var _0x8741x3 = new Array;
    return protected_links = protected_links['replace'](' ', ''), _0x8741x3 = protected_links['split'](',')
}
var Base64 = {
    _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    encode: function (_0x8741x3) {
        var _0x8741x4, _0x8741x5, _0x8741x6, _0x8741x7, _0x8741x8, _0x8741x9, _0x8741xa, _0x8741xb = '',
            _0x8741xc = 0;
        for (_0x8741x3 = Base64._utf8_encode(_0x8741x3); _0x8741xc < _0x8741x3['length'];) {
            _0x8741x4 = _0x8741x3['charCodeAt'](_0x8741xc++), _0x8741x5 = _0x8741x3['charCodeAt'](_0x8741xc++), _0x8741x6 = _0x8741x3['charCodeAt'](_0x8741xc++), _0x8741x7 = _0x8741x4 >> 2, _0x8741x8 = (3 & _0x8741x4) << 4 | _0x8741x5 >> 4, _0x8741x9 = (15 & _0x8741x5) << 2 | _0x8741x6 >> 6, _0x8741xa = 63 & _0x8741x6, isNaN(_0x8741x5) ? _0x8741x9 = _0x8741xa = 64 : isNaN(_0x8741x6) && (_0x8741xa = 64), _0x8741xb = _0x8741xb + this['_keyStr']['charAt'](_0x8741x7) + this['_keyStr']['charAt'](_0x8741x8) + this['_keyStr']['charAt'](_0x8741x9) + this['_keyStr']['charAt'](_0x8741xa)
        };
        return _0x8741xb
    },
    decode: function (_0x8741x3) {
        var _0x8741x4, _0x8741x5, _0x8741x6, _0x8741x7, _0x8741x8, _0x8741x9, _0x8741xa, _0x8741xb = '',
            _0x8741xc = 0;
        for (_0x8741x3 = _0x8741x3['replace'](/[^A-Za-z0-9\+\/\=]/g, ''); _0x8741xc < _0x8741x3['length'];) {
            _0x8741x7 = this['_keyStr']['indexOf'](_0x8741x3['charAt'](_0x8741xc++)), _0x8741x8 = this['_keyStr']['indexOf'](_0x8741x3['charAt'](_0x8741xc++)), _0x8741x9 = this['_keyStr']['indexOf'](_0x8741x3['charAt'](_0x8741xc++)), _0x8741xa = this['_keyStr']['indexOf'](_0x8741x3['charAt'](_0x8741xc++)), _0x8741x4 = _0x8741x7 << 2 | _0x8741x8 >> 4, _0x8741x5 = (15 & _0x8741x8) << 4 | _0x8741x9 >> 2, _0x8741x6 = (3 & _0x8741x9) << 6 | _0x8741xa, _0x8741xb += String['fromCharCode'](_0x8741x4), 64 != _0x8741x9 && (_0x8741xb += String['fromCharCode'](_0x8741x5)), 64 != _0x8741xa && (_0x8741xb += String['fromCharCode'](_0x8741x6))
        };
        return _0x8741xb = Base64._utf8_decode(_0x8741xb)
    },
    _utf8_encode: function (_0x8741x3) {
        _0x8741x3 = _0x8741x3['replace'](/\r\n/g, '\x0A');
        for (var _0x8741x4 = '', _0x8741x5 = 0; _0x8741x5 < _0x8741x3['length']; _0x8741x5++) {
            var _0x8741x6 = _0x8741x3['charCodeAt'](_0x8741x5);
            128 > _0x8741x6 ? _0x8741x4 += String['fromCharCode'](_0x8741x6) : _0x8741x6 > 127 && 2048 > _0x8741x6 ? (_0x8741x4 += String['fromCharCode'](_0x8741x6 >> 6 | 192), _0x8741x4 += String['fromCharCode'](63 & _0x8741x6 | 128)) : (_0x8741x4 += String['fromCharCode'](_0x8741x6 >> 12 | 224), _0x8741x4 += String['fromCharCode'](_0x8741x6 >> 6 & 63 | 128), _0x8741x4 += String['fromCharCode'](63 & _0x8741x6 | 128))
        };
        return _0x8741x4
    },
    _utf8_decode: function (_0x8741x3) {
        for (var _0x8741x4 = '', _0x8741x5 = 0, _0x8741x6 = c1 = c2 = 0; _0x8741x5 < _0x8741x3['length'];) {
            _0x8741x6 = _0x8741x3['charCodeAt'](_0x8741x5), 128 > _0x8741x6 ? (_0x8741x4 += String['fromCharCode'](_0x8741x6), _0x8741x5++) : _0x8741x6 > 191 && 224 > _0x8741x6 ? (c2 = _0x8741x3['charCodeAt'](_0x8741x5 + 1), _0x8741x4 += String['fromCharCode']((31 & _0x8741x6) << 6 | 63 & c2), _0x8741x5 += 2) : (c2 = _0x8741x3['charCodeAt'](_0x8741x5 + 1), c3 = _0x8741x3['charCodeAt'](_0x8741x5 + 2), _0x8741x4 += String['fromCharCode']((15 & _0x8741x6) << 12 | (63 & c2) << 6 | 63 & c3), _0x8741x5 += 3)
        };
        return _0x8741x4
    }
},
    encode = document['getElementById']('encode'),
    decode = document['getElementById']('decode'),
    output = document['getElementById']('output'),
    input = document['getElementById']('input'),
    User_ID = '',
    protected_links = '',
    a_to_va = 0,
    a_to_vb = 0,
    a_to_vc = ''
