var board = document.querySelector('#board');
var submitMsg = document.querySelector('.submit-msg');
var submitMsgYes = document.querySelector('.submit-msg .btn-flip-back .btn-flip-yes');
var clear = document.querySelector('.clear');
var clearYes = document.querySelector('.clear .btn-flip-back .btn-flip-yes');
var msgDraft = document.querySelector('#msg-draft');
var refresh = document.querySelector('#refresh');
var signout = document.querySelector('#signout');
var upload = document.querySelector('.upload-btn');
var input = document.querySelector('#upload-input');

var page = 0;
var pageSize = 10;
var oldPage = 0;
var listShowIndex = 0;