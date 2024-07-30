/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  // TODO How do i connect the database here?
  private users = [
    {
      id: 1,
      name: 'Pierre Irénée Poukam',
      email: 'peter@ghost.tech',
      role: 'ENGINEER',
    },
    {
      id: 2,
      name: 'Christion Tumi',
      email: 'tumi@ghost.tech',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Thomas Jean Tientcheu',
      email: 'jean@ghost.tech',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Elysée Youatou',
      email: 'elyse@ghost.tech',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Reine Christine Ngakmeutcheu',
      email: 'christine@ghost.tech',
      role: 'ADMIN',
    },
  ];

  findAll(role?: 'INTERN' | 'INGENEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'INGENEER' | 'ADMIN';
  }) {
    const userByHigherId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHigherId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'INGENEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removeUser;
  }
}
