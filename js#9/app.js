function main(){
    var s1=+prompt("Enter first std num")
    var s2=+prompt("Enter second std num")
    var s3=+prompt("Enter third std num")
    var t=( s1+s2+s3)
    document.write("total nym of stds:"+t+"<br>")
    function  avg( ){
        var a=t/3
        document.write("Avg num of stds is:"+ a+"<br>")

    }
    avg()
    function percentage(){
        var b= (t/3)*100
        document.write("Percentage% is :"+ b)
    }
    percentage()
    

}
main()