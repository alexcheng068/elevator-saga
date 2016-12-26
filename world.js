{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevator1 = elevators[1];
        var elevator2 = elevators[2];
        var elevator3 = elevators[3];
        var floor0 = floors[0];
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
        });
        elevator1.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator1.goToFloor(0);
        });
        elevator.on("floor_button_pressed", function(floorNum) {
            // Maybe tell the elevator to go to that floor?
            elevator.goToFloor(floorNum);
        })
        elevator1.on("floor_button_pressed", function(floorNum) {
            // Maybe tell the elevator to go to that floor?
            elevator1.goToFloor(floorNum);
        })
        elevator2.on("floor_button_pressed", function(floorNum) {
            // Maybe tell the elevator to go to that floor?
            elevator2.goToFloor(floorNum);
        })
        elevator3.on("floor_button_pressed", function(floorNum) {
            // Maybe tell the elevator to go to that floor?
            elevator3.goToFloor(floorNum);
        })
        floor0.on("down_button_pressed", function() {
            // Maybe tell an elevator to go to this floor?
            elevator1.goToFloor(floor0.floorNum);
        })
        floor0.on("down_button_pressed", function() {
            // Maybe tell an elevator to go to this floor?
            elevator.goToFloor(floor0.floorNum);
        })
        floor0.on("down_button_pressed", function() {
            // Maybe tell an elevator to go to this floor?
            elevator2.goToFloor(floor0.floorNum);
        })
        floor0.on("down_button_pressed", function() {
            // Maybe tell an elevator to go to this floor?
            elevator3.goToFloor(floor0.floorNum);
        })
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}