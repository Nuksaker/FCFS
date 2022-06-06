var ProcessControl = function(process,state,burst_time,arrival_time,execue_time,waiting_time,turn_time,io_time,io_waitting,io_state){
    
    this.Process = process;  
    this.State = state;
    this.Burst_time = burst_time;
    this.Arrival_time = arrival_time;
    this.Execue_time = execue_time;
    this.Waiting_time = waiting_time;
    this.Turn_time = turn_time;

    this.IO_Time = io_time;
    this.IO_Waitting = io_waitting;
    this.IO_state = io_state;

    this.Setstate = function(state){
        this.State = state;
    }
    this.Setburst_time = function(burst_time){
        this.Burst_time = burst_time;
    }
    this.Setexecue_time = function(execue_time){
        this.Execue_time = execue_time;
    }
    this.Setarrival_time = function(arrival_time){
        this.Arrival_time = arrival_time;
    }
    this.Setwaiting_time = function(waiting_time){
        this.Waiting_time = waiting_time;
    }
    this.Setturn_time = function(turn_time){
        this.Turn_time = turn_time;
    }
    this.Setio_time = function(io_time){
        this.IO_Time = io_time;
    }
    this.Setio_waitting = function(io_waitting){
        this.IO_Waitting = io_waitting;
    }
    this.Setiostate = function(io_state){
        this.IO_state = io_state;
    }
    
    
    this.GetProcess = function(){
        return this.Process;
    }
    this.GetBurst_time = function(){
        return this.Burst_time;
    }
    this.GetArrival_time = function(){
        return this.Arrival_time;
    }
    this.GetExecue_time = function(){
        return this.Execue_time;
    }
    this.GetWaiting_time = function(){
        return this.Waiting_time;
    }
    this.GetTurn_time = function(){
        return this.Turn_time;
    }
    this.GetState = function(){
        return this.State;
    }
    this.GetIO_Time = function(){
        return this.IO_Time;
    }
    this.GetIO_Waitting = function(){
        return this.IO_Waitting;
    }
    this.GetIO_state = function(){
        return this.IO_state;
    }
}

var IO_ProcessControl = function(io_process,io_state){
    this.IOProcess = io_process;
    this.IOState = io_state;

    this.SetCD_state = function(io_state){
        this.IOState = io_state;
    }

    this.GetIO_Process = function() {
        return this.IOProcess;
    }
    this.GetIO_state = function(){
        return this.IO_state;
    }
}

// var USB_ProcessControl = function(usb_process,usb_state){
//     this.USB_Process = usb_process;
//     this.USB_State = usb_state;

//     this.SetUSB_state = function(usb_state){
//         this.USB_State = usb_state;
//     }

//     this.GetUSB_Process = function() {
//         return this.USB_Process;
//     }
//     this.GetUSB_state = function(){
//         return this.USB_state;
//     }
// }