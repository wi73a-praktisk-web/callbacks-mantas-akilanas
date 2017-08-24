function func(string){
    string = "<p>" + string + "<p>";
    callback(string);
}
function callback(string){
    console.log(string);
}
func("hello");