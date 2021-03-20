const Searching = Search.prototype;

function Search() {
    this.keyword = document.querySelector('input[name="search"]');
    this.engine = document.querySelector('.SelectSearch');
    this.button = document.querySelector('.img-button');
    this.form = document.querySelector('.search');
}
Searching.Engine = function() {
    this.form.addEventListener('submit', e => {

        e.preventDefault();
        
        let engine = this.engine.value;
        let keyword = this.keyword.value;

        if (engine === '통합검색') {
            location.href = './/학교도서관_검색.html' + keyword; // '' 안에 통합 검색엔진
        }
        else if (engine === '제목검색') {
            location.href = '' + keyword; // '' 안에 제목 검색엔진
        }
        else  {
            location.href = '' + keyword; // '' 안에 작가 검색엔진
        }
    });
}
new Search();