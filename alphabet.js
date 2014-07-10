/**
 * Created by B.Vaughn on 7/10/2014.
 */
var abc = 'abcdefghijklmnopqrstuvwxyz';
var arr = abc.split('');
var t = 1;
for(i=0;i<arr.length;i++){

    if(i%2 === 0){
        if(t === 3) {
            console.log(arr[i].toUpperCase());
            document.write(arr[i].toUpperCase() + ", ");
            t = 1;
        } else {
            console.log(arr[i]);
            document.write(arr[i] + ", ");
            t++;
        }
    }
}