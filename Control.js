var table = document.getElementById("table-main");  //table main
var table_IO = document.getElementById("table-IO")  //table i/o

var Pro_Num = 1,                                    //Process Number
    IO_NUM = 1;                                     //I/O Process
var P_Control = new Array();                        //Process CPU
var IO_Control = new Array();                       //Process I/O

var b_time = new Array();                           //time burst
var t_time = new Array();                           //time Turn Around Time

var State = ["New", "Ready", "Running", "Waiting", "Terminate"]     //state Process

var time_start = 1,                                 // tome start cpu
    Pro = 1,                                        // Process Run
    e_time = 1,                                     // Execute time run
    w_time = 0,                                     // Waiting time run
    a_time = 0;                                     //Arrival Time
    
// let t_avg = new Array();                            
// let w_avg = new Array();
// let total_tat = 0;
// let t,w;
// let total_wat = 0;
// let j;
// let i;

function Start() {

    document.getElementById('btn_add').disabled = true;
    document.getElementById('start').disabled = true;
    
    setInterval(function () {
        var new_time = time_start++;
        w_time++;
        t_time++;
        a_time = new_time;

        if (Pro+1 <= Pro_Num-1) {
            e_time = P_Control[Pro - 1].GetExecue_time();
            e_time++;
            P_Control[Pro - 1].Setexecue_time(e_time);                                      //set Execue Time 
            table.rows[Pro].cells[3].innerHTML = P_Control[Pro - 1].GetExecue_time();       //Get Execue Time show
            
            P_Control[Pro].Setwaiting_time(w_time);                                         //set Waiting Time
            table.rows[Pro + 1].cells[4].innerHTML = P_Control[Pro].GetWaiting_time();      //Get Waiting Time Show
            
            P_Control[Pro].Setarrival_time(a_time);                                         //Set Arrival time
            table.rows[Pro].cells[5].innerHTML = P_Control[Pro - 1].GetArrival_time();      //Get Arrival time show

            if (P_Control[Pro - 1].GetProcess() == Pro) {                                   //check Process run 
                P_Control[Pro - 1].Setstate(State[2]);                                      
                table.rows[Pro].cells[1].innerHTML = P_Control[Pro - 1].GetState();
                table.rows[Pro].cells[1].style.backgroundColor = "green";
            }

            if (P_Control[Pro - 1].GetBurst_time() == P_Control[Pro - 1].GetExecue_time()) { //check finish Process
                P_Control[Pro - 1].Setstate(State[4]);
                table.rows[Pro].cells[1].innerHTML = P_Control[Pro - 1].GetState();
                table.rows[Pro].cells[1].style.backgroundColor = "red";
                Pro++;
                // time_tmp=1;
                // w_time=1;
                P_Control[Pro - 1].Setturn_time(P_Control[Pro - 1].GetWaiting_time());
                table.rows[Pro - 1].cells[6].innerHTML = P_Control[Pro - 1].GetTurn_time();

            }
            // console.log(P_Control[Pro - 1].GetTurn_time());
        }
        else if(Pro == Pro_Num-1){
            e_time = P_Control[Pro - 1].GetExecue_time();
            e_time++;
            P_Control[Pro - 1].Setexecue_time(e_time);                                    //set Execue Time 
            table.rows[Pro].cells[3].innerHTML = P_Control[Pro - 1].GetExecue_time();     //Get Execue Time show
               
            // P_Control[Pro].Setarrival_time(a_time);
            // table.rows[Pro].cells[5].innerHTML = P_Control[Pro-1].GetArrival_time();

            table.rows[Pro].cells[5].innerHTML = a_time - e_time;

            if (P_Control[Pro - 1].GetProcess() == Pro) {
                P_Control[Pro - 1].Setstate(State[2]);
                table.rows[Pro].cells[1].innerHTML = P_Control[Pro - 1].GetState();
                table.rows[Pro].cells[1].style.backgroundColor = "green";
            }

            if (P_Control[Pro - 1].GetBurst_time() == P_Control[Pro - 1].GetExecue_time()) {
                P_Control[Pro - 1].Setstate(State[4]);
                table.rows[Pro].cells[1].innerHTML = P_Control[Pro - 1].GetState();
                table.rows[Pro].cells[1].style.backgroundColor = "red";
                Pro++;
                
                // P_Control[Pro].Setturn_time(e_time);
                // table.rows[Pro].cells[6].innerHTML = P_Control[Pro].GetTurn_time();
                table.rows[Pro-1].cells[6].innerHTML = w_time;
            }
        }
    
        // console.log(Pro+1);
        // console.log(Pro_Num-1);  
               
        $("#Extime" + t_time).html(P_Control[Pro_Num - 2].GetExecue_time());

        document.getElementById("cpu_time").innerHTML = new_time; //Show CPU time


    }, 1000)
    
    // let total_tat = 0;
    // let i;
    // for (i = 0; i < Pro; i++) {
    //     t_avg = total_tat + P_Control[i].GetTurn_time();
    // }
    // let t = t_avg / i;

    // let total_wat = 0;
    // let j;
    // for (j = 0; j = Pro; j++) {
    //     w_avg = total_wat + P_Control[j].GetWaiting_time();
    // }
    // let w = w_avg / j;
   
    // document.getElementById("AvgW").innerHTML = w.toFixed(2); 
    // document.getElementById("AvgT").innerHTML = t.toFixed(2); 

}

function Add_Process() {

    if (b_time[Pro_Num - 1] == ' ') {
        alert("Enter Burst Time !!!");
    } else {
        b_time[Pro_Num - 1] = document.getElementById("B_time").value;
        P_Control[Pro_Num - 1] = new ProcessControl(Pro_Num, State[1], b_time[Pro_Num - 1], 0, 0, 0, 0, 0, 0, 0);
        var row = table.insertRow(Pro_Num);
        var t_ = P_Control[Pro_Num - 1].GetBurst_time();

        row.insertCell(0).innerHTML = P_Control[Pro_Num - 1].GetProcess();
        row.insertCell(1).innerHTML = P_Control[Pro_Num - 1].GetState();
        row.insertCell(2).innerHTML = P_Control[Pro_Num - 1].GetBurst_time();
        row.insertCell(3).innerHTML = "<div id='Extime" + Pro_Num + "'>" + P_Control[Pro_Num - 1].GetExecue_time() + "</div>";
        row.insertCell(4).innerHTML = "0"
        row.insertCell(5).innerHTML = "0"
        row.insertCell(6).innerHTML = P_Control[Pro_Num - 1].GetTurn_time();
        row.insertCell(7).innerHTML = "0";
        row.insertCell(8).innerHTML = "0";
        Pro_Num++;
    } console.log(t_);

}
function Ref() {

    $(table).find("tr:not(:first)").remove();
    $(table_IO).find("tr:not(:first)").remove();
    // $(table_USB).find("tr:not(:first)").remove();
    IO_NUM = 1;
    Pro_Num = 1;
    time_start = 0;
    setInterval(function () {
        var new_time = Time_Stop;
        document.getElementById("cpu_time").innerHTML = new_time;
    })
}

function addIO() {

    if (Pro_Num > IO_NUM) {
        var row = table_IO.insertRow(IO_NUM);
        IO_Control[IO_NUM - 1] = new IO_ProcessControl(IO_NUM, State[0]);
        row.insertCell(0).innerHTML = IO_Control[IO_NUM - 1].GetIO_Process();
        row.insertCell(1).innerHTML = IO_Control[IO_NUM - 1].GetIO_state();
        row.insertCell(2).innerHTML = "<button class='btn btn-sm btn-success btn-confirm'>Run</button>";
        row.insertCell(3).innerHTML = "<button class='btn btn-sm btn-danger btn-confirm'>Terminate</button>";
        IO_NUM++;

    } else {
        alert("Check Process");
    }
}
