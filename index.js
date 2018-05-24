let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    
    store.drivers.push(this)
  }
  
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  
  passengers() {
    const x = this
    const y = x.trips()
    for (const p of y) {
     return p.passenger()
    }
 }
}


let passengerId = 0

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    
    store.passengers.push(this)
  }
  
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  
  drivers() {
    return store.trips.filter(trip => {
      if (this.id === trip.passengerId) {
        return trip.driver
      }
    })
  }
}

let tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    
    store.trips.push(this)
  }
  
  driver() {
    const dId = this.driverId
    return store.drivers.find(function(driver) {
      return driver.id === dId
    })
  }
  
  passenger() {
    const pId = this.passengerId
    return store.passengers.find(function(passenger) {
      return passenger.id === pId
    })
  }
}
