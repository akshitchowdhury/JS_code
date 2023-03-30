

function div_conquer(n1,n2,n3,n4){


    var arr = [n1,n2,n3,n4]

    // let sub1 = [arr[0], arr[2]]

    // let sub2 = [arr[1], arr[3]]

    // var sum_Arr = [sub1[0]+sub1[1], sub2[0]+sub2[1]]

    // console.log(sum_Arr)


var part1 = 0
var part2 = 0
    for(var i=0; i<arr.length; i++){

        if(i%2==0){

            part1 += arr[i]
        }

        else if(i%2!=0){

            part2 += arr[i]
        }
    }

    console.log(part1, part2) 
}

div_conquer(1,2,3,4)


