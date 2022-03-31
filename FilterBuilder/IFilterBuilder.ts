import { Filter } from "../Filters/Filter";
export interface IFilterBuilder
{ }

export interface IFilterPresetBuilder extends IFilterBuilder
{
    build(): Filter;
}

export interface IFilterCustomBuilder extends IFilterBuilder
{
    build(config: string): Filter;
}

export interface IFilterCommonBuilder extends IFilterCustomBuilder, IFilterPresetBuilder
{
    build(): Filter;
    build(config: string): Filter;
}