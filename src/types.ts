export interface optionsType {
    /** 是否严格要求规定顺序、非重复，不符合时直接丢弃 */
    strict?: boolean;
    /** 重复设置时是否更新值，strict 为 true 时不生效 */
    cover?: boolean;
    /** true 时计算各个时间点的差值，默认为 false 计算所有点到起始点的时间。 */
    diff?: boolean;
}

export type callbackType = (data: {[name: string]: number}) => any;

export type dataType = Map<string, number>;