declare global {
  namespace App {
    interface Locals {
      userid: string;
    }
  }
}

export { handle } from './hooks';

