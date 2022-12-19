/**
 * Properties string format : ex 'prop1.prop2.prop3'
 * return the value found
 */
import {FormGroup} from "@angular/forms";
import {Entity} from "../../models/entity.model";


export function propertiesToValue(properties: string, obj: object) {
  let propList = properties.split('.');
  let value = obj;
  let i = 0;

  while (i < propList.length && value !== null) {
    const property = propList[i];
    if (value.hasOwnProperty(property)) {
      value = value[property];
    } else {
      value = null;
    }
    i++;
  }
  return value;
}

export function parseFormGroup(formGroup: FormGroup, entity: Entity)
{
  parseFormValues(formGroup.value, entity);
}

function parseFormValues(values: any, entity: Entity)
{
  for(const value in values)
  {

    if(typeof values[value] === 'object')
    {
      entity[value] = {};
      parseFormValues(values[value], entity[value]);
    } else {
      entity[value] = values[value];
    }
  }
}
