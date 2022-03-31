import { SubsectionModel } from '../model/subsection.model';

export const SubsectionData: Map<string, SubsectionModel> = new Map([
  ['1,1', new SubsectionModel('Case', [], [], [], [])],
  ['1,2', new SubsectionModel('Motherboard', [], [], [], [])],
  ['1,3', new SubsectionModel('CPU', [], [], [], [])],
  ['1,4', new SubsectionModel('RAM Memory', [], [], [], [])],
  ['1,5', new SubsectionModel('Cooler', [], [], [], [])],
  ['1,6', new SubsectionModel('HD and SSD', [], [], [], [])],
  ['1,7', new SubsectionModel('Power Supply', [], [], [], [])],
  ['1,8', new SubsectionModel('Graphics Card', [], [], [], [])],
  ['1,9', new SubsectionModel('Peripherals', [], [], [], [])],
  ['1,10', new SubsectionModel('Monitor', [], [], [], [])],

  ['2,1', new SubsectionModel('Prices', [], [], [], [])],
  ['2,2', new SubsectionModel('Stores', [], [], [], [])],
  ['2,3', new SubsectionModel('Tips', [], [], [], [])],

  ['3,1', new SubsectionModel('Motherboard', [], [], [], [])],
  ['3,2', new SubsectionModel('CPU', [], [], [], [])],
  ['3,3', new SubsectionModel('RAM', [], [], [], [])],
  ['3,4', new SubsectionModel('Memory', [], [], [], [])],
  ['3,5', new SubsectionModel('Cooler', [], [], [], [])],
  ['3,6', new SubsectionModel('Power Supply', [], [], [], [])],
  ['3,7', new SubsectionModel('HD and SSD', [], [], [], [])],
  ['3,8', new SubsectionModel('Graphics Card', [], [], [], [])],

  ['4,1', new SubsectionModel('Windows', [], [], [], [])],
  ['4,2', new SubsectionModel('Linux', [], [], [], [])],
  ['4,3', new SubsectionModel('Drivers', [], [], [], [])],
]);
