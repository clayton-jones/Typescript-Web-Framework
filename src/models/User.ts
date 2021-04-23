interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(prop: string): string | number {
    return this.data[prop];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
