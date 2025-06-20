package com.blacklist.server.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "history")
public class History {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "player_id", nullable = false)
    private Integer playerId;

}