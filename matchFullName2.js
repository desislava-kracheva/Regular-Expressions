function solveForSecondTime([text]){

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let matches = text.match(pattern);
    console.log(matches);

}

solveForSecondTime('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov')