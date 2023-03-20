// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ResearchObjectVersion extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ResearchObjectVersion entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ResearchObjectVersion must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ResearchObjectVersion", id.toString(), this);
    }
  }

  static load(id: string): ResearchObjectVersion | null {
    return changetype<ResearchObjectVersion | null>(
      store.get("ResearchObjectVersion", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value!.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }

  get cid(): string {
    let value = this.get("cid");
    return value!.toString();
  }

  set cid(value: string) {
    this.set("cid", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get researchObject(): string {
    let value = this.get("researchObject");
    return value!.toString();
  }

  set researchObject(value: string) {
    this.set("researchObject", Value.fromString(value));
  }
}

export class ResearchObject extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ResearchObject entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ResearchObject must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ResearchObject", id.toString(), this);
    }
  }

  static load(id: string): ResearchObject | null {
    return changetype<ResearchObject | null>(store.get("ResearchObject", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get id64(): string {
    let value = this.get("id64");
    return value!.toString();
  }

  set id64(value: string) {
    this.set("id64", Value.fromString(value));
  }

  get id10(): string {
    let value = this.get("id10");
    return value!.toString();
  }

  set id10(value: string) {
    this.set("id10", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get recentCid(): string {
    let value = this.get("recentCid");
    return value!.toString();
  }

  set recentCid(value: string) {
    this.set("recentCid", Value.fromString(value));
  }

  get versions(): Array<string> {
    let value = this.get("versions");
    return value!.toStringArray();
  }

  set versions(value: Array<string>) {
    this.set("versions", Value.fromStringArray(value));
  }
}